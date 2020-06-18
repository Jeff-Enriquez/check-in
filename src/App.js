import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import CheckIn from './pages/CheckIn'
import NewList from './pages/NewList'
import Queue from './pages/Queue'
import Login from './pages/Login'

function App({ firebase }) {
  const [user, setUser] = useState(null)

  const signOut = () => {
    setUser(null)
  }
  
  useEffect(() => {
    firebase.auth.onAuthStateChanged(user => {
      if(user){
        setUser(user)
      } else {
        setUser(undefined)
      }
    })
    return
  }, [])

  return (
    <>
      <Switch>
        <PrivateRoute
          exact path='/check-in'
          component={CheckIn} 
          user={user}
          signOut={signOut}
          firebase={firebase}
        />
        <PrivateRoute
          exact path='/queue'
          component={Queue} 
          user={user}
          signOut={signOut}
          firebase={firebase}
        />
        <PrivateRoute
          exact path='/new-list'
          component={NewList} 
          user={user}
          signOut={signOut}
          firebase={firebase}
        />
        <Route exact path='/login' render={() => 
          <Login
            firebase={firebase}
            setUser={setUser}
            user={user} 
          />
        }/>
        <Route render={() =>
          <Redirect to='/login' />} 
        />
      </Switch>
    </>
  )
}

export default App;
