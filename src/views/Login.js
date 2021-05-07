import '../scss/login/login.scss';
import logo from '../asset/images/piggy-bank-euro.svg';
import Dashboard from './Dashboard.js';
import Logo from '../components/logo.js';
import AuthenticationInput from '../components/AuthenticationInput';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Login() {
  return (
    <div className="wrapper">
      <div className="logo-container">
        <Logo />
      </div>

    <div className="login-container">
      <Logo />
      <div className="form-box">
        <form className="login-form">
          <AuthenticationInput form="login-form" label="email"/>
          <AuthenticationInput form="login-form" label="password" isPassword/>

          <div className="forgot-password-container">
            <a className="forgot-password">
              forgot password
            </a>
          </div>
            <button type="submit"><Link to="/Dashboard">Login</Link></button>
            <div className="sign-up-container">
              <Link to="/signup">SIGN UP</Link>
            </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Login;