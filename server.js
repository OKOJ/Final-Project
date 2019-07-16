require('dotenv').config()
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan'); // used to see requests
var AWS = require('aws-sdk');
new AWS.Config({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "us-west-2"
});
const db = require('./models');
const PORT = process.env.PORT || 3001;
var s3Bucket = new AWS.S3( { params: {Bucket: 'marketplacephotos'} } );

const isAuthenticated = require("./config/isAuthenticated");
const auth = require("./config/auth");

// Setting CORS so that any website can
// Access our API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

//log all requests to the console
app.use(morgan('dev'));

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(bodyParser.json({limit: '1000000kb'}));
app.use(bodyParser.json({limit: '250mb'}));
app.use(bodyParser.urlencoded({limit: '250mb', extended: true}));

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/appDB', {useNewUrlParser: true, useCreateIndex: true})
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));


// LOGIN ROUTE
app.post('/api/login', (req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

// SIGNUP ROUTE
app.post('/api/signup', (req, res) => {
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => {
      console.log(err)
      res.status(400).json(err)});
});

//PRODUCT ROUTE
app.post("/api/product",  async (req, res) => {
  console.log('req.body: ', req.body);
  let buf = new Buffer(req.body.image.replace(/^data:image\/\w+;base64,/, ""),'base64')
  let data = {
    Key: req.body.userId, 
    Body: buf,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg'
  };
  await s3Bucket.putObject(data, function(err, data){
      if (err) { 
        console.log(err);
        console.log('Error uploading data: ', data); 
      } else {
        console.log('data: ', data);
        console.log('succesfully uploaded the image!');
      }
  });
  //TODO
  req.body.image = data.url || "";
  db.Product.create(req.body)
  .then(dbProduct => 
    {
      return db.User.findByIdAndUpdate(req.body.userId, { $push: { products: dbProduct._id } }, { new: true })
      //res.json(data)
    })
      .then(dbUser => res.json(dbUser))
  .catch(err => {
    console.log(err)
    res.status(400).json(err)});
});

// GET ALL // ADDRESS ROUTE
app.get("/api/user/address", (req, res) => {
  db.User.find({})
  .then(data => {
    if(data) {
      res.json(data);
    } else {
      res.status(404).send({success: false, message: 'No user found'});
    }
  }).catch(err => res.status(400).send(err))
})


// Any route with isAuthenticated is protected and you need a valid token
// to access
app.get('/api/user/:id', isAuthenticated, (req, res) => {
  db.User.findById(req.params.id)
  //.populate("product")
  .then(data => {
    if(data) {
      res.json(data);
    } else {
      res.status(404).send({success: false, message: 'No user found'});
    }
  }).catch(err => res.status(400).send(err));
});

app.get('/api/user/:id/products', isAuthenticated, (req, res) => {
  db.User.findById({_id: req.params.id})
  .populate("products")
  .then(dbUser => {
    console.log(dbUser)
    res.json(dbUser)
  }).catch(err => res.status(400).send(err));

});




// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', isAuthenticated /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
    res.status(401).send(err);
  }
  else {
    next(err);
  }
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
