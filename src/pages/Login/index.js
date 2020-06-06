import React, { useState } from 'react'
import useStyles from './styles.js'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const classes = useStyles()

  const handleForm = async e => {
    e.preventDefault()
  }

  return (
    <div className={classes.page}>
      {/* <form className={classes.inputContainer} onSubmit={handleForm}>
        <input type="username" className={classes.input} placeholder="Username" autoComplete='username' value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" className={classes.input} placeholder="Password" autoComplete='current-password' value={password} onChange={e => setPassword(e.target.value)} />
      </form> */}
      	<form className={classes.formContainer}>
          <h1 className={classes.heading}>Fast Queue</h1>
					<div className={classes.inputContainer}>
						<p className={classes.inputHeading}>Username</p>
            <input type="username" className={classes.input} placeholder="Username" autoComplete='username' value={username} onChange={e => setUsername(e.target.value)} />
					</div>
          <div className={classes.inputContainer}>
						<p className={classes.inputHeading}>Password</p>
            <input type="password" className={classes.input} placeholder="Password" autoComplete='current-password' value={password} onChange={e => setPassword(e.target.value)} />
					</div>
          <button className={classes.loginBtn}>Login</button>
				</form>
    </div>
  )
}

export default Login