import '../scss/login.scss';
import Logo from '../components/logo.js';
import AuthenticationInput from '../components/AuthenticationInput';
import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Link, useHistory } from "react-router-dom";
import VerifyEmailInfoBox from '../components/VerifyEmailInfoBox';
import ModalBox from '../components/ModalBox';
import ErrorBox from '../components/ErrorBox';

// login react-component
export function Login() {
  // creates states for login-component
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showEmailVerificationBox, setShowEmailVerificationBox] = useState(false)
  const [showPasswordResetModal, setShowPasswordResetModal] = useState(false)
  const [error, setError] = useState("")
  const [canBeRedirected, setCanBeRedirected] = useState(false)
  // accessing useHistory-hook 
  const history = useHistory()
  // accessing login and logout methods from AuthContext
  const { login, logout } = useAuth()

  // log user in and then...
  // ..redirecting them to dashboard if successful and email verified
  // ..show VerifyEmailInfoBox if user is successfully logged in but hasn't verified their email address
  // ..show error-box if login isn't successful
  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setShowEmailVerificationBox(false)
    setError("")
    setCanBeRedirected(false)

    try{
      await login(email,password)
      .then((userCredentials) => {
        if(userCredentials.user.emailVerified){
          setCanBeRedirected(true)
        } else {
          setShowEmailVerificationBox(true)
          logout()
        }
        
      })
      .catch((error) => {setError(error.code)})
    } catch {setError("auth/unknown-error")}

    if(canBeRedirected){
      history.push("/dashboard")
    }
    setLoading(false)
  }

  // logs user in, resends verification-email, logs them out
  async function resendVerificationEmail(setEmailSend) {
		try {
      await login(email,password)
      .then((userCredential) => {
          userCredential.user.sendEmailVerification()
          .then(() => {
            setEmailSend(true)
            logout()
          })
          .catch(() => {
            setError("auth/too-many-attempts")
            logout()
          })
        }
      )
      .catch((error) => {setError(error.code)})
		} catch {setError("auth/unknown-error")}
	}

  // render login component
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
              <p className="forgot-password" onClick={() => {setShowPasswordResetModal(true)}}>
                forgot password
              </p>
            </div>
            {error && <ErrorBox errorCode={error}/>}
            {showEmailVerificationBox && !error && <VerifyEmailInfoBox resendVerificationEmail={resendVerificationEmail} onLogin/>}
            <input className="login-button" type="submit" value="Login" disabled={loading}/>
            <div className="sign-up-container">
              <Link to="/signup">SIGN UP</Link>
            </div>
          </form>
        </div>
      </div>
      {showPasswordResetModal && <ResetPasswordModal onClose={() => {setShowPasswordResetModal(false)}}/>}
    </div>
  );
}

// reset-password modal react component
function ResetPasswordModal({onClose}){
  // creates states for component
  const [emailForNewPassword,setEmailForNewPassword] = useState()
  const [resetEmailWasSent, setResetEmailWasSent] = useState(false)
  // accessing resetPassword method from AuthContext
  const { resetPassword } = useAuth()

  // sends email for password-reset to users email address
  async function handleResetSubmit(){
    try {
      await resetPassword(emailForNewPassword)
      setResetEmailWasSent(true)
    } catch {
      alert("Something went wrong...")
    }
  }

  // render reset-password modalbox using ModalBox component
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