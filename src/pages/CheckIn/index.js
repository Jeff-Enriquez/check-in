import React, { useState, useEffect } from 'react'
import useStyles from './styles.js'

const CheckIn = ({ user, firebase }) => {
  const [list, setList] = useState(<></>)

  const classes = useStyles()

  const addToQueue = i => {
    
  }
  
  useEffect(() => {
    firebase.database.collection("CheckIn").doc(user.uid)
      .onSnapshot((doc) => {
        const data = doc.data().patients
        let listElements = []
        for (const property in data) {
          listElements.push(
            <li className={classes.tableRow} key={property}>
              <div className={`${classes.col} ${classes.col1}`}>{property}</div>
              <div className={`${classes.col} ${classes.col2}`}>{data[property]}</div>
              <div className={`${classes.col} ${classes.col3}`}>
                <button onClick={() => addToQueue(property)}>Add</button>
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
      <h1 className={classes.pageTitle}>Check In</h1>
      <div className={classes.container}>
        <input className={classes.search} placeholder='Search by name'></input>
        <ul className={classes.responsiveTable}>
          <li className={classes.tableHeader}>
            <div className={`${classes.col} ${classes.col1}`}>ID</div>
            <div className={`${classes.col} ${classes.col2}`}>Name</div>
            <div className={`${classes.col}`}>ADD TO QUEUE</div>
          </li>
          {list}
        </ul>
      </div>
    </div>
  )
}

export default CheckIn