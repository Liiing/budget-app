import '../scss/login/login.scss';
import logo from '../asset/images/piggy-bank-euro.svg';

function Login() {
  return (
    <div className="wrapper">
      <div className="logo-container">
        <div className="logo-box">
          <div className="logo-img-box">
            <img className="logo-svg"src={logo} alt="piggy bank picture"/>
          </div>
          <div className="logo-text">
            <h1 className="app-name">
              Budgetary
            </h1>
            <h3 className="slogan-text">
              Keep track of your Finances
            </h3>
          </div>
        </div>
      </div>
    <div className="login-container">
      <div className="form-box">
        <form className="login-form">
          <input className="username-input"></input>
          <input className="password-input"></input>
          <a className="forgot-password" >
            forgot password
          </a>
          <button type="submit">Login</button>
          <a className="sign-up" >
            Sign Up
          </a>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Login;