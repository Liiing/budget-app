import '../scss/signup.scss';
import Logo from '../components/logo';
import React, {useState} from 'react';
import validatePassword from '../validation/passwordValidation';
import AuthenticationInput from '../components/AuthenticationInput';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import VerifyEmailInfoBox from '../components/VerifyEmailInfoBox';
import { db } from '../firebase/firebase';
import ErrorBox from '../components/ErrorBox';

// signup react-component
const Signup = () => {
  // creates states for singup component
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [loading, setLoading] = useState(false)
  const [passwordRulesView, setView] = useState(false)
  const [showEmailVerificationBox, setShowEmailVerificationBox] = useState(false)
  const [error, setError] = useState("")
  // accessing signup and login methods from AuthContext
  const { signup, logout } = useAuth()

  // creates database entry for newly registered user (if it doesn't already exist)
  async function createDatabaseEntry(uid){
    db.ref('users/' + uid).set({
      baseBudget : 0,
      budget : 0,
      expenses : {},
      goals: {},
      History: {}
    }).then(()=> {
      logout()
    }).catch((error) => {
      alert(error)
    })
  }

  // checks if all fields needed for signup are filled
  function checkIfAllFieldsAreFilled(){
    if(!email){
      setError("auth/missing-email")
      return false;
    }
    if(!password){
      return false;
    }
    if(!passwordConfirmation){
      return false;
    }
    return true;
  }

  // checks if fields are valid, signs up user and shows the email-verification info-box
  // if fields aren't valid or signup fails the error-box is shown
  async function handleSubmit(event) {
    event.preventDefault()
    setError("")
    var validParameters = true

    if(!checkIfAllFieldsAreFilled()){
      setError("auth/missing-fields")
      validParameters = false
    }
    if(!validatePassword(password,passwordConfirmation) && validParameters){
      setError("auth/password-insufficient")
      validParameters = false
    }

    if (validParameters){
      try{
        setLoading(true)
        await signup(email,password)
        .then((userCredential) => {
          userCredential.user.sendEmailVerification()
          createDatabaseEntry(userCredential.user.uid)
          setShowEmailVerificationBox(true)
        })
        .catch(error => setError(error.code))
      } catch {setError("auth/unknown-error")}
      setLoading(false)
    }
  }

  // render signup component
  return (
    <div className="wrapper">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="signup-container">
        <Logo />
        <div className="form-box">
          <form className="signup-form" onSubmit={handleSubmit}>
            <AuthenticationInput type="email" form="signup-form" label="email" onChange={({target: {value}}) => setEmail(value)}/>
            <AuthenticationInput type="password" form="signup-form" label="password" onFocus={() => setView(true)} onBlur={() => setView(false)} onChange={({target: {value}}) => setPassword(value)}/>
            
            <div className={`password-rules-container ${passwordRulesView ? "showPasswordRules" : "hidePasswordRules"}`}>
              <h3>Your password must contain at least:</h3>
              <ul>
                <li>8 charaters</li>
                <li>one capitalized letter</li>
                <li>one number</li>
                <li>one special charater</li>
              </ul>
            </div>
            <AuthenticationInput type="confirm" form="signup-form" label="confirm password" onChange={({target: {value}}) => setPasswordConfirmation(value)}/>

            {error && <ErrorBox errorCode={error} styling={error}/>}
            {showEmailVerificationBox && !error && <VerifyEmailInfoBox/>}

            <input className="signup-button" type="submit" value="Sign Up" disabled={loading}/>
            <div className="sign-up-container">
              <Link to="/budget-app/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
