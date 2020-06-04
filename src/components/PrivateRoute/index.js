import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from '../Header'

const PrivateRoute = ({ component: Component, currentUser, exact, path }) => (
  currentUser
    ?
    <Route exact path={path} render={() => (
    <>
      <Header />
      <Component />
    </>
    )} />
    : 
    <Redirect to='/login' />
)

export default PrivateRoute