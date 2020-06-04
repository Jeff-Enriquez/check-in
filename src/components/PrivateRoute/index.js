import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from '../Header'

const PrivateRoute = ({ component: Component, currentUser, exact, path, ...rest }) => (
  currentUser
    ?
    <Route exact path={path} render={(props) => (
    <>
      <Header />
      <Component {...rest} />
    </>
    )} />
    : 
    <Redirect to='/login' />
)

export default PrivateRoute