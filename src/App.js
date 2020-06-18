import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import CheckIn from './pages/CheckIn'
import NewList from './pages/NewList'
import Queue from './pages/Queue'
import Login from './pages/Login'
import { FirebaseContext } from './components/Firebase';


function App() {
  const [user, setUser] = useState(true)
  const [list, setList] = useState(null)

  const signOut = () => {
    setUser(null)
    setList(null)
  }

  return (
    <>
      <Switch>
        <PrivateRoute
          exact path='/check-in'
          component={CheckIn} 
          user={user}
          list={list}
          setList={setList}
          signOut={signOut}
        />
        <PrivateRoute
          exact path='/queue'
          component={Queue} 
          user={user}
          list={list}
          setList={setList}
          signOut={signOut}
        />
        <PrivateRoute
          exact path='/new-list'
          component={NewList} 
          user={user}
          list={list}
          setList={setList}
          signOut={signOut}
        />
        <Route exact path='/login' render={() => 
          <FirebaseContext.Consumer>
            {firebase => <Login
              firebase={firebase}
              setUser={setUser}
              setList={setList}
              user={user} />}
          </FirebaseContext.Consumer>
        }/>
        <Route render={() =>
          <Redirect to='/login' />} 
        />
      </Switch>
    </>
  )
}

export default App;
