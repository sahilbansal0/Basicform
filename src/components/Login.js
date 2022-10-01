import React from 'react';
import {NavLink} from 'react-router-dom'
import Stylediv from './Login.style';
import Styleform from './Form.style';

const Login = () => {
  return (
    <Stylediv>
     
    <Styleform>
   
    <label>Email:</label>
    <input type="email" required/>
    <label>password:</label>
    <input type="password" required/>
   
    <input type="submit" required/ >
  </Styleform>
  </Stylediv>
  );
}

export default Login;
