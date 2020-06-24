import React, { useState, useEffect } from 'react'
import useStyles from './styles.js'

const Header = ({ user, firebase }) => {
  const [list, setList] = useState(<></>)

  const classes = useStyles()

  useEffect(() => {
    firebase.database.collection("Queue").doc(user.uid)
      .onSnapshot((doc) => {
        const data = doc.data().patients
        let listElements = []
        for (let i = 0; i < data.length; i++) {
          let patient = data[i]
          listElements.push(
            <li className={classes.tableRow} key={patient.id}>
              <div className={`${classes.col} ${classes.col1}`}>{patient.id}</div>
              <div className={`${classes.col} ${classes.col2}`}>{patient.name}</div>
              <div className={`${classes.col} ${classes.col3}`}>{patient.dob}</div>
              <div className={`${classes.col} ${classes.col4}`}>
                <button onClick={() => firebase.removeFromQueue(user.uid, patient)}>Remove</button>
              </div>
            </li>
          )
        }
        setList(listElements)
      })
    return
  }, [])

  return (
    <div className={classes.page}>
      <h1 className={classes.pageTitle}>Queue</h1>
      <div className={classes.container}>
        <ul className={classes.responsiveTable}>
          <li className={classes.tableHeader}>
            <div className={`${classes.col} ${classes.col1}`}>ID</div>
            <div className={`${classes.col} ${classes.col2}`}>Name</div>
            <div className={`${classes.col} ${classes.col3}`}>DOB</div>
            <div className={`${classes.col} ${classes.col4}`}><p className={classes.remove}>Remove</p></div>
          </li>
          {list}
        </ul>
      </div>
    </div>
  )
}

export default Header