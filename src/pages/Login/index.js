import React from 'react'
import useStyles from './styles.js'

const Login = () => {
  const classes = useStyles()

  return (
    <div className={classes.page}>
      <h1 className={classes.pageTitle}>Login</h1>
      <div className={classes.container}>
        <h1>Login Page</h1>
      </div>
    </div>
  )
}

export default Login