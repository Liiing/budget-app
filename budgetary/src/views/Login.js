import '../scss/login/login.scss';

function Login() {
  return (
    <div className="wrapper">
      <div className="logo-container">
        <div className="logo-box">
          <h1 className="app-name">
            Budgetary
          </h1>
          <h3 className="slogan-test">
            Keep track of your Finances
          </h3>
        </div>
      </div>
    <div className="login-container">
      <form className="login-form">
        <input className="username-input"></input>
        <input className="password-input"></input>
        <a className="forgot-password">
          forgot password
        </a>
        <button type="submit">Login</button>
        <a className="sign-up">
          Sign Up
        </a>
      </form>
    </div>
    </div>
  );
}

export default Login;