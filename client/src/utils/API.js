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
  signUpUser: (username, email, password, address, contact) => {
    return axios.post('/api/signup', {
      username,
      email,
      password,
      address,
      contact
    });
  },

  //create product database
  postProduct: (userId, products, price, quantity, image, description) => {
    return axios.post('/api/product', {
      userId,
      products,
      price,
      quantity,
      image,
      description
    });
  },

  //  products by user
  getUserProducts: (id) => {
    return axios.get(`/api/user/${id}/products`);

  },

  deleteProduct: (id) => {
    return axios.delete(`/api/product/${id}`);

  }

};
