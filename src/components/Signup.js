import React from 'react';
import Stylediv from './Login.style';
import Styleform from './Form.style';

const Signup = () => {
  return (
    <Stylediv>
    <Styleform>
      <label>Firstname:</label>
      <input type="text" title='kaise ho bhai log' required/>
      <label>Lastname:</label>
      <input type="text" required/>
      <label>Email:</label>
      <input type="email" required/>
      <label>password:</label>
      <input type="password" required minLength="4" maxLength="8" />
      <label>Confirm password:</label>
      <input type="password" required   minLength="4" maxLength="8"/>
      <input type="submit" required/ >
    </Styleform>
    </Stylediv>
  );
}

export default Signup;
