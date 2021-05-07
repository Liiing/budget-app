import '../scss/signup/signup.scss';
import Logo from '../components/logo';
import React, {useState} from 'react';
import validatePassword from '../validation/passwordValidation';
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
            <div className="input-box">
              <span class="material-icons user-icon">person</span>
              <input className="username-input" type="text" form="signup-form" onChange={({target: {value}}) => setEmail(value)}  required/>
              <span className="floating-label">email</span>
            </div>
            <div className="input-box">
              <span class="material-icons lock-icon">lock</span>
              <input className="password-input" type="password" form="signup-form" onChange={({target: {value}}) => setPassword(value)} required/>
              <span className="floating-label">password</span>
            </div>
            <div className="input-box">
              <span class="material-icons lock-icon">lock</span>
              <input className="password-input" type="password" form="signup-form" onChange={({target: {value}}) => setPasswordConfirmation(value)} required/>
              <span className="floating-label">confirm password</span>
            </div>
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
