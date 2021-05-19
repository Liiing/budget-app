import '../scss/login/login.scss';
import Logo from '../components/logo.js';
import AuthenticationInput from '../components/AuthenticationInput';
import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Link, useHistory } from "react-router-dom";
import VerifyEmailInfoBox from '../components/VerifyEmailInfoBox';
import ModalBox from '../components/ModalBox';

function Login() {
   
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showEmailVerificationBox, setShowEmailVerificationBox] = useState(false)
  const [showPasswordResetModal, setShowPasswordResetModal] = useState(false)
  const history = useHistory()
  const { login, logout, currentUser } = useAuth()
  console.log("Loading Login page...")
  console.log(showPasswordResetModal)

  async function handleSubmit(event) {
    event.preventDefault()
    console.log("TRYING to log in...")

    setLoading(true)
    if(currentUser){
      if(currentUser.emailVerified){
        history.push("/")
      } else {
        setShowEmailVerificationBox(true)
        logout()
      } 
    }

    try{
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
              <a className="forgot-password" onClick={() => {setShowPasswordResetModal(true)}}>
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

      {showPasswordResetModal && <ResetPasswordModal onClose={() => {setShowPasswordResetModal(false)}} />}
    </div>
  );
}

function ResetPasswordModal({onClose}){
  const [emailForNewPassword,setEmailForNewPassword] = useState()
  const [resetEmailWasSent, setResetEmailWasSent] = useState(false)
  const { resetPassword } = useAuth()

  async function handleResetSubmit(){
    console.log("Trying to reset password...")

    try {
      console.log("starting...")
      await resetPassword(emailForNewPassword)
      console.log("finished...")
      setResetEmailWasSent(true)
      console.log("changed text...")
    } catch {
      alert("Something went wrong...")
    }

  }

  return (
    <ModalBox onClose={onClose}>
      <h2>Reset Password</h2>
      <p>Please enter your email address and we will send you an email with instructions to set a new password.</p>
      <div className="password-reset-box" onSubmit={handleResetSubmit}>
        <div className="email-input">
          <label>Email:</label>
          <input 
            className="username-input" 
            type="email" 
            onChange={({target: {value}}) => setEmailForNewPassword(value)} 
            required
          />
        </div>
        <div className="button-container">
          {!resetEmailWasSent && <button onClick={() => handleResetSubmit()}>Reset Password</button>}
          {resetEmailWasSent && <p>Email has been sent.</p>}
        </div>
      </div>
    </ModalBox>
  )
}

export default Login;