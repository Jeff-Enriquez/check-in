import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import CheckIn from './pages/CheckIn'
import NewList from './pages/NewList'
import Queue from './pages/Queue'
import Login from './pages/Login'

function App() {
  const [currentUser, setCurrentUser] = useState(true)

  return (
    <>
      <Switch>
        <PrivateRoute
          exact path='/check-in'
          component={CheckIn} 
          currentUser={currentUser}
        />
        <PrivateRoute
          exact path='/queue'
          component={Queue} 
          currentUser={currentUser}
        />
        <PrivateRoute
          exact path='/new-list'
          component={NewList} 
          currentUser={currentUser}
        />
        <Route exact path='/login' 
          component={Login}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
        <Route render={() =>
        <Redirect to='/login' />
      } />
      </Switch>
    </>
  )
}

export default App;
