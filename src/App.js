import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import CheckIn from './pages/CheckIn'
import NewList from './pages/NewList'
import Queue from './pages/Queue'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/check-in' component={CheckIn}/>
        <Route exact path='/queue' component={Queue}/>
        <Route exact path='/new-list' component={NewList}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </>
  )
}

export default App;
