import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'

const Header = ({ firebase, signOut }) => {
  const classes = useStyles()
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)
  const nav = useRef(null)
  const burgerContent = useRef(null)
  const line1 = useRef(null)
  const line2 = useRef(null)
  const line3 = useRef(null)

  const doSignOut = () => {
    signOut()
    firebase.doSignOut()
  }

  useEffect(() => {
    if(isBurgerOpen) {
      nav.current.className = `${classes.nav} ${classes.display}`
      burgerContent.current.className = `${classes.burger} ${classes.fixed}`
      line1.current.className = `${classes.burgerLine} ${classes.transformLine1}`
      line2.current.className = classes.displayNone
      line3.current.className = `${classes.burgerLine} ${classes.transformLine3}`
    } else {
      nav.current.className = classes.nav
      burgerContent.current.className = classes.burger
      line1.current.className = classes.burgerLine
      line2.current.className = classes.burgerLine
      line3.current.className = classes.burgerLine
    }
    return
  })

  return (
    <>
      <div 
        className={classes.burger} 
        onClick={() => setIsBurgerOpen(bool => !bool)}
        ref={burgerContent}>
        <div className={classes.burgerLine} ref={line1}></div>
        <div className={classes.burgerLine} ref={line2}></div>
        <div className={classes.burgerLine} ref={line3}></div>
      </div>
      <nav className={classes.nav} ref={nav}>
        <Link to='/check-in' className={classes.link} onClick={() => setIsBurgerOpen(false)}>Check In</Link>
        <Link to='/queue' className={classes.link} onClick={() => setIsBurgerOpen(false)}>Queue</Link>
        <Link to='/new-list' className={classes.link} onClick={() => setIsBurgerOpen(false)}>New List</Link>
        <p onClick={() => doSignOut()}>Sign Out</p>
      </nav>
    </>
  )
}

export default Header