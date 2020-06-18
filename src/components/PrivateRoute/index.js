import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from '../Header'
import { FirebaseContext } from '../Firebase';


const PrivateRoute = ({ component: Component, user, path, signOut }) => (
  user
    ?
    <Route exact path={path} render={() => (
    <>
      <FirebaseContext.Consumer>
        {firebase => 
          <>
            <Header firebase={firebase} signOut={signOut}/>
            <Component firebase={firebase} user={user} />
          </>
        }
      </FirebaseContext.Consumer>
    </>
    )} />
    : 
    <Redirect to='/login' />
)

export default PrivateRoute