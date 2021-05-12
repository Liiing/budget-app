import '../scss/signup/signup.scss';
import Logo from '../components/logo';
import React, {useState} from 'react';
import validatePassword from '../validation/passwordValidation';
import AuthenticationInput from '../components/AuthenticationInput';
import {Link, useHistory} from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { getElementError } from '@testing-library/dom';

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const { signup } = useAuth()
  const [passwordRulesView, setView] = useState(false)


  async function handleSubmit(event) {
    event.preventDefault()
    const passwordIsValid=validatePassword(password, passwordConfirmation)
    console.log(passwordIsValid)

    if (passwordIsValid){
      try{
        setLoading(true)
        await signup(email,password)
        history.push("/")
      } catch {
        console.log("AccountCreation failed")
      }
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

            <input className="signup-button" type="submit" value="Sign Up" disabled={loading}/>
            <div className="sign-up-container">
              <Link to="/budget-app">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
