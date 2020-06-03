import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import CheckIn from './pages/CheckIn'

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/check-in' component={CheckIn}/>
      </Switch>
    </>
  )
}

export default App;
