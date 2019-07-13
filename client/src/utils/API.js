import axios from 'axios';

export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  
  // sign up a user to our service
  signUpUser: (username, email, password, address,contact) => {
    return axios.post('/api/signup', {username: username, email: email, password: password, address:address, contact:contact});
  },

  //create product database
  postProduct: (userId, products, price, quantity, image, contact) => {
    return axios.post('/api/product', {
      userId,
      products,
      price,
      quantity,
      image,
      contact
    });
  },

  //  products by user
  getUserProducts: (id) => {
    return axios.get(`/api/user/${id}/products`);

  }

};
