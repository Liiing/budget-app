import '../scss/signup/signup.scss';
import Logo from '../components/logo';
import React, {useState} from 'react';
import validatePassword from '../validation/passwordValidation';
import AuthenticationInput from '../components/AuthenticationInput';
import {Link, useHistory} from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Signup = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [passwordConfirmation,setPasswordConfirmation] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const { signup } = useAuth()

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
            <AuthenticationInput form="signup-form" label="email" onChange={({target: {value}}) => setEmail(value)}/>
            <AuthenticationInput form="signup-form" label="password" onChange={({target: {value}}) => setPassword(value)} isPassword/>
            <AuthenticationInput form="signup-form" label="confirm password" onChange={({target: {value}}) => setPasswordConfirmation(value)} isPassword/>

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
