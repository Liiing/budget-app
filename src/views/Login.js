import '../scss/login/login.scss';
import Logo from '../components/logo.js';
import AuthenticationInput from '../components/AuthenticationInput';
import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Link, useHistory } from "react-router-dom";
import VerifyEmailInfoBox from '../components/VerifyEmailInfoBox';

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showEmailVerificationBox, setShowEmailVerificationBox] = useState(false)
  const history = useHistory()
  const { login, logout, currentUser } = useAuth()

  async function handleSubmit(event) {
    event.preventDefault()

    if(currentUser){
      if(currentUser.emailVerified){
        history.push("/")
      } else {
        setShowEmailVerificationBox(true)
        logout()
      } 
    }

    try{
      setLoading(true)
      await login(email,password)
      await history.push("/")
      setShowEmailVerificationBox(true)
    } catch {
      setShowEmailVerificationBox(false)
      alert("Login failed")
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
            <AuthenticationInput type="email" form="login-form" label="email" onChange={({target: {value}}) => setEmail(value)}/>
            <AuthenticationInput type="password" form="login-form" label="password"  onChange={({target: {value}}) => setPassword(value)}/>

            <div className="forgot-password-container">
              <a className="forgot-password">
                forgot password
              </a>
            </div>
            {showEmailVerificationBox && <VerifyEmailInfoBox onLogin/>}
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