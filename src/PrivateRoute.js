import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../src/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()
  var userIsLoggedInAndVerified = currentUser ? currentUser.emailVerified : false

  return (
    <Route
      {...rest}
      render={props => {
        return userIsLoggedInAndVerified ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}