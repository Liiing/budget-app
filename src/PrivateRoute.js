import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../src/AuthContext"

// creates simple route only accessible if user is logged in and verified
export default function PrivateRoute({ component: Component, ...rest }) {
  // accessing currentUser from AuthContext
  const { currentUser } = useAuth()
  // checks if user is logged in and if email is verified
  var userIsLoggedInAndVerified = currentUser ? currentUser.emailVerified : false

  // renders page if user is logged in and email is verified
  // otherwise redirects to login page
  return (
    <Route
      {...rest}
      render={props => {
        return userIsLoggedInAndVerified ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}