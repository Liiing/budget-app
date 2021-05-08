import '../scss/login/login.scss';
import logo from '../asset/images/piggy-bank-euro.svg';
import Dashboard from './Dashboard.js';
import Logo from '../components/logo.js';
import AuthenticationInput from '../components/AuthenticationInput';
import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const { login } = useAuth()

  async function handleSubmit(event) {
    event.preventDefault()

    try{
      setLoading(true)
      await login(email,password)
      history.push("/")
    } catch {
      console.log("Login failed")
    }
    setLoading(false)
  }

  return (
    <div className="wrapper">
      <div className="logo-container">
        <Logo />
      </div>

      <div className="login-container">
        <Logo />
        <div className="form-box">
          <form className="login-form" onSubmit={handleSubmit}>
            <AuthenticationInput form="login-form" label="email" onChange={({target: {value}}) => setEmail(value)}/>
            <AuthenticationInput form="login-form" label="password"  onChange={({target: {value}}) => setPassword(value)} isPassword/>

            <div className="forgot-password-container">
              <a className="forgot-password">
                forgot password
              </a>
            </div>
            <input className="login-button" type="submit" value="Login" disabled={loading}/>
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