import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import CheckIn from './pages/CheckIn'
import NewList from './pages/NewList'

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/check-in' component={CheckIn}/>
        <Route exact path='/new-list' component={NewList}/>
      </Switch>
    </>
  )
}

export default App;
