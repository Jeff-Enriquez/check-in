import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from '../Header'

const PrivateRoute = ({ component: Component, user, path, firebase, signOut }) => (
  user
    ?
    <Route exact path={path} render={() => (
    <>
      <Header firebase={firebase} signOut={signOut}/>
      <Component firebase={firebase} user={user} />
    </>
    )} />
    : 
    <Redirect to='/login' />
)

export default PrivateRoute