import React, { useState, useEffect } from 'react'
import useStyles from './styles.js'

const CheckIn = ({ user, firebase }) => {
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')

  const classes = useStyles()
  
  useEffect(() => {
    firebase.database.collection("CheckIn").doc(user.uid)
      .onSnapshot((doc) => {
        const data = doc.data().patients
        let listElements = []
        for (const property in data) {
          listElements.push([data[property],
            <li className={classes.tableRow} key={property}>
              <div className={`${classes.col} ${classes.col1}`}>{property}</div>
              <div className={`${classes.col} ${classes.col2}`}>{data[property]}</div>
              <div className={`${classes.col} ${classes.col3}`}>
                <button onClick={() => firebase.moveToQueue(user.uid, property, data[property])}>Add</button>
              </div>
            </li>]
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
        <input className={classes.search} placeholder='Search by name' onChange={e => setSearch(e.target.value)} value={search}></input>
        <ul className={classes.responsiveTable}>
          <li className={classes.tableHeader}>
            <div className={`${classes.col} ${classes.col1}`}>ID</div>
            <div className={`${classes.col} ${classes.col2}`}>Name</div>
            <div className={`${classes.col}`}>ADD TO QUEUE</div>
          </li>
          {list.map(item => {
            if(search === ''){
              return item[1]
            }
            let match = true
            for(let i = 0; i < search.length; i++){
              if(search[i].toLowerCase() !== item[0][i].toLowerCase()){
                match = false
                break
              }
            }
            if(match){
              return item[1]
            }
          })}
        </ul>
      </div>
    </div>
  )
}

export default CheckIn