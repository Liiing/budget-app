import '../scss/signup/signup.scss';
import Logo from '../components/logo';
import React, {useState} from 'react';
import validatePassword from '../validation/passwordValidation';
import AuthenticationInput from '../components/AuthenticationInput';
import {Link, useHistory} from 'react-router-dom';
import { useAuth } from '../AuthContext';
import VerifyEmailInfoBox from '../components/VerifyEmailInfoBox';
import { getElementError } from '@testing-library/dom';
import { db } from '../firebase/firebase';
import ErrorBox from '../components/ErrorBox';

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [loading, setLoading] = useState(false)
  const { signup, logout } = useAuth()
  const [passwordRulesView, setView] = useState(false)
  const [showEmailVerificationBox, setShowEmailVerificationBox] = useState(false)
  const [error, setError] = useState("")

  async function createDatabaseEntry(uid){
    var doesNotExist = true;
    var userRef = db.ref('users/' + uid).on('value', snapshot => {
      doesNotExist = !snapshot.exists()
    })
    
    if(doesNotExist){
      db.ref('users/' + uid).set({
        baseBudget : 0,
        budget : 0,
        expenses : {},
        goals: {},
        History: {}
      })
    }
  }

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
          logout()
          setShowEmailVerificationBox(true)
        })
        .catch(error => setError(error.code))
      } catch {setError("auth/unknown-error")}
      setLoading(false)
    }
  }

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
            {showEmailVerificationBox && <VerifyEmailInfoBox/>}

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
