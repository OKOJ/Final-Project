import React, { Component } from "react";
//import {Link} from 'react-router-dom';
import Signup from "./Signup";
import Login from "./Login";


class SignupLogin extends Component {

 render () {
     return(
         <div>
        <Signup />
        <Login />
        </div>

     )            
 }


}

export default SignupLogin;