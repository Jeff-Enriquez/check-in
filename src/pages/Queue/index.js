import React, { useState, useEffect } from 'react'
import useStyles from './styles.js'

const Header = ({ user, firebase }) => {
  const [list, setList] = useState(<></>)

  const classes = useStyles()

  const removeFromQueue = () => {

  }

  useEffect(() => {
    firebase.database.collection("Queue").doc(user.uid)
      .onSnapshot((doc) => {
        const data = doc.data().patients
        let listElements = []
        for (const property in data) {
          listElements.push(
            <li className={classes.tableRow} key={property}>
              <div className={`${classes.col} ${classes.col1}`}>{property}</div>
              <div className={`${classes.col} ${classes.col2}`}>{data[property]}</div>
              <div className={`${classes.col} ${classes.col3}`}>
                <button onClick={() => removeFromQueue(property)}>Add</button>
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
            <div className={`${classes.col} ${classes.col3}`}>Remove</div>
          </li>
          {list}
        </ul>
      </div>
    </div>
  )
}

export default Header