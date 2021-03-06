import React, { useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import useStyles from './styles.js'
import Credits from '../../components/Credits'

const Login = ({ setUser, user, firebase }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [creditsIsOpen, setCreditsIsOpen] = useState(false)

  const errorElement = useRef(null)


  const classes = useStyles()

  const handleForm = async e => {
    e.preventDefault()
    let email = username + '@site.com'
    try {
      const { user } = await firebase.doSignInWithEmailAndPassword(email, password)
      setUser(user)
    } catch (err) {
      errorElement.current.className = classes.error
      if(err.code === 'auth/user-not-found'){
        setError('The username is not valid')
      } else if (err.code === 'auth/wrong-password'){
        setError('The password is incorrect')
      }
      setTimeout(function(){ 
        errorElement.current.className = `${classes.error} ${classes.fadeOut}`
      }, 3000)
    }
  }

  return (
    <>
    {user && <Redirect to='/check-in' /> }
    {user === undefined && <>
    <div className={classes.page}>
      <div className={classes.content}>
        <form onSubmit={handleForm} className={classes.formContainer}>
          <h1 className={classes.heading}>Fast Queue</h1>
          <div className={classes.inputContainer}>
            {/* This is the user image */}
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path className={classes.svg} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            <input required type="text" className={classes.input} placeholder="Username" autoComplete='username' value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className={classes.inputContainer}>
            {/* This is the password image */}
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path className={classes.svg} d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
            <input required type="password" className={classes.input} placeholder="Password" autoComplete='current-password' value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type='submit' className={classes.loginBtn}>Login</button>
          <p className={classes.error} ref={errorElement}>{error}</p>
        </form>
      </div>
      <button className={classes.credits} onClick={() => setCreditsIsOpen(true)}>Credits</button>
    </div>
    <Credits creditsIsOpen={creditsIsOpen} setCreditsIsOpen={setCreditsIsOpen} />
    </>}
    </>
  )
}

export default Login