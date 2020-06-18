import React, { useState, useEffect } from 'react'
import useStyles from './styles.js'

const CheckIn = ({ user, firebase }) => {
  const [list, setList] = useState(<></>)

  const classes = useStyles()
  
  useEffect(() => {
    firebase.database.collection("CheckIn").doc(user.uid)
      .onSnapshot((doc) => {
        const data = doc.data().patients
        let listElements = []
        for(let i = 0; i < data.length; i += 2){
          listElements.push(
            <li className={classes.tableRow} key={i}>
              <div className={`${classes.col} ${classes.col1}`}>{data[i]}</div>
              <div className={`${classes.col} ${classes.col2}`}>{data[i+1]}</div>
              <div className={`${classes.col} ${classes.col3}`}>
                <button>Add</button>
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