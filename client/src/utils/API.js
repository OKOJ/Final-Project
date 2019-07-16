import axios from 'axios';

export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },

  getAll: (address) => {
    return axios.get(`/api/user/address`);
  },
  
  // sign up a user to our service
  signUpUser: (username, email, password, address) => {
    return axios.post('api/signup', {username: username, email: email, password: password, address:address});
  },

  //create product database
  postProduct: (product, price, quantity, image) => {
    return axios.post('api/product', {product: product, price: price, quantity: quantity, image: image});
  }
};
