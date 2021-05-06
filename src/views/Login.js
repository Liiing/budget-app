import '../scss/login/login.scss';
import logo from '../asset/images/piggy-bank-euro.svg';
import Dashboard from './Dashboard.js';
import Logo from '../components/logo.js';

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
          <div className="input-box">
            <span class="material-icons user-icon">person</span>
            <input className="username-input" required/>
            <span className="floating-label">email</span>
          </div>
          <div className="input-box">
            <span class="material-icons lock-icon">lock</span>
            <input className="password-input" type="password" required/>
            <span className="floating-label">password</span>
          </div>
          <div className="forgot-password-container">
            <a className="forgot-password">
              forgot password
            </a>
          </div>
            <button type="submit"><Link to="/Dashboard">Login</Link></button>
            <div className="sign-up-container">
              <Link to="/Dashboard">SIGN UP</Link>
            </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Login;