import '../scss/signup/signup.scss';
import Logo from '../components/logo';
import React, {useState} from 'react';
import validatePassword from '../validation/passwordValidation';
import AuthenticationInput from '../components/AuthenticationInput';
import {Link} from 'react-router-dom';

const Signup = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordConfirmation,setPasswordConfirmation] = useState("");

  return (
    <div className="wrapper">
      <div className="logo-container">
        <Logo />
      </div>

      <div className="signup-container">
        <Logo />
        <div className="form-box">
          <form className="signup-form">
            <AuthenticationInput form="signup-form" label="email" onChange={({target: {value}}) => setEmail(value)}/>
            <AuthenticationInput form="signup-form" label="password" onChange={({target: {value}}) => setPassword(value)} isPassword/>
            <AuthenticationInput form="signup-form" label="confirm password" onChange={({target: {value}}) => setPasswordConfirmation(value)} isPassword/>

            <button type="submit"><Link to="/Dashboard">Sign Up</Link></button>
            <div className="sign-up-container">
              <Link to="/budget-app">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
