import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../src/AuthContext"

// creates route only accessible when user isn't authenticated
export default function PrivateRoute({ component: Component, ...rest }) {
  // accessing currentUser from AuthContext
  const { currentUser } = useAuth()
  // checks if user is logged in and whether email is verified
  var userIsLoggedInAndVerified = currentUser ? currentUser.emailVerified : false

  // renders page if user is NOT logged in or email is NOT verified
  // otherwise redirects to dashboard
  return (
    <Route
      {...rest}
      render={props => {
        return userIsLoggedInAndVerified ? <Redirect to="/dashboard" /> : <Component {...props} />
      }}
    ></Route>
  )
}