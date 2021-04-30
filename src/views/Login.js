import '../scss/login/login.scss';
import logo from '../asset/images/piggy-bank-euro.svg';

function Login() {
  return (
    <div className="wrapper">
      <div className="logo-container">
        <div className="logo-box">
          <div className="logo-img-box">
            <img className="logo-svg" src={logo} alt="piggy bank picture"/>
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
          <div className="input-box">
            <span class="material-icons user-icon">person</span>
            <input className="username-input"></input>
          </div>
          <div className="input-box">
            <span class="material-icons lock-icon">lock</span>
            <input className="password-input"></input>
          </div>
          <a className="forgot-password" >
            forgot password
          </a>
          <button type="submit">LOGIN</button>
          <a className="sign-up" >
            SIGN UP
          </a>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Login;