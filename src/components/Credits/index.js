import React, { useEffect, useRef } from 'react'
import useStyles from './styles.js'

const Credits = ({ creditsIsOpen, setCreditsIsOpen }) => {
  const page = useRef(null)

  const classes = useStyles()

  useEffect(() => {
    if(creditsIsOpen){
      page.current.className = `${classes.page} ${classes.display}`
    } else {
      page.current.className = classes.page
    }
    return
  }, [creditsIsOpen])
  
  return (
    <div className={classes.page} ref={page}>
      <div className={classes.content}>
        <div className={classes.headingContainer}>
          <h1 className={classes.heading}>Software Developer: </h1>
          <h1 className={classes.name}>Jeff Enriquez</h1>
        </div>
        <button onClick={() => setCreditsIsOpen(false)}>close</button>
        <div className={classes.profileContainer}>
          <img src='/images/jeff.png' alt='profile of Jeff Enriquez'/>
          <div className={classes.textContainer}>
            <p>I'm passionate about software engineering and enjoy bringing ideas to life through code. I am currently looking for work and like to produce software that will add value to other people's lives.</p>
            <div className={classes.links}>
              <p><span className={classes.bold}>Email:</span> <span className={classes.light}>jeff.enriquez.h@gmail.com</span></p>
              <p><span className={classes.bold}>Linked In:</span> <span className={classes.light}>linkedin.com/in/jeffrey-enriquez/</span></p>
              <p><span className={classes.bold}>Projects:</span> <span className={classes.light}>https://github.com/Jeff-Enriquez</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credits