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
        for(let i = 0; i < data.length; i++) {
          let patient = data[i]
          listElements.push([patient.name,
            <li className={classes.tableRow} key={patient.id}>
              <div className={`${classes.col} ${classes.col1}`}>{patient.id}</div>
              <div className={`${classes.col} ${classes.col2}`}>{patient.name}</div>
              <div className={`${classes.col} ${classes.col3}`}>{patient.dob}</div>
              <div className={`${classes.col} ${classes.col4}`}>
                <button onClick={() => firebase.moveToQueue(user.uid, patient)}>Add</button>
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
        <input className={classes.search} placeholder='Last Name, First Name (or) DOB' onChange={e => setSearch(e.target.value)} value={search}></input>
        <ul className={classes.responsiveTable}>
          <li className={classes.tableHeader}>
            <div className={`${classes.col} ${classes.col1}`}>ID</div>
            <div className={`${classes.col} ${classes.col2}`}>Name</div>
            <div className={`${classes.col} ${classes.col3}`}>DOB</div>
            <div className={`${classes.col} ${classes.col4}`}><p className={classes.add}>ADD TO QUEUE</p></div>
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