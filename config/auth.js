const db = require('../models');
const jwt = require('jsonwebtoken');
const firebaseKey = process.env.FIREBASE_KEY;
const geocodeKey = process.env.GEOCODE_API_KEY;
const bootstrapKey = process.env.BOOTSTRAP_URL_KEY;

module.exports = {
  logUserIn: function (email, password) {
    return new Promise((resolve, reject) => {
      db.User.findOne({
        email: email
      }).then(user => {
        user.verifyPassword(password, (err, isMatch) => {
          if (isMatch && !err) {
            let token = jwt.sign({ id: user._id, email: user.email, firebaseKey, geocodeKey, bootstrapKey }, process.env.SERVER_SECRET, { expiresIn: 129600 }); // Sigining the token
            resolve({ success: true, message: "Token Issued!", token: token, user: user });
             token = jwt.sign({
              id: user._id,
              email: user.email
            }, process.env.SERVER_SECRET, {
              expiresIn: 129600
            }); // Sigining the token
            resolve({
              success: true,
              message: "Token Issued!",
              token: token,
              user: user
            });
          } else {
            reject({
              success: false,
              message: "Authentication failed. Wrong password."
            });
          }
        });
      }).catch(err => reject({
        success: false,
        message: "User not found",
        error: err
      }));
    })
  }
}