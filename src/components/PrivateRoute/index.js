import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from '../Header'
import { FirebaseContext } from '../Firebase';


const PrivateRoute = ({ component: Component, user, path, signOut, ...rest }) => (
  user
    ?
    <Route exact path={path} render={() => (
    <>
      <FirebaseContext.Consumer>
        {firebase => 
          <>
            <Header firebase={firebase} signOut={signOut} {...rest}/>
            <Component firebase={firebase} {...rest}/>
          </>
        }
      </FirebaseContext.Consumer>
    </>
    )} />
    : 
    <Redirect to='/login' />
)

export default PrivateRoute