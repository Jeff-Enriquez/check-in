import React, { useState, useEffect, useRef } from 'react'
import useStyles from './styles.js'

const CheckIn = ({ user, firebase }) => {
  const modal = useRef(null)
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')
  const [patient, setPatient] = useState({})

  const classes = useStyles()
  
  const closeModal = () => {
    modal.current.className = classes.modal
    setPatient({})
  }

  const moveToQueue = patient => {
    firebase.moveToQueue(user.uid, patient)
    closeModal()
  }
  
  const openModalAndSetPatient = patient => {
    modal.current.className = `${classes.modal} ${classes.display}`
    setPatient(patient)
  }
  
  useEffect(() => {
    firebase.database.collection("CheckIn").doc(user.uid)
      .onSnapshot((doc) => {
        const data = doc.data().patients
        let listElements = []
        for(let i = 0; i < data.length; i++) {
          let patient = data[i]
          listElements.push([patient,
            <li className={classes.tableRow} key={patient.id}>
              <div className={`${classes.col} ${classes.col1}`}>{patient.id}</div>
              <div className={`${classes.col} ${classes.col2}`}>{patient.name}</div>
              <div className={`${classes.col} ${classes.col3}`}>{patient.dob}</div>
              <div className={`${classes.col} ${classes.col4}`}>
                <button onClick={() => openModalAndSetPatient(patient)}>Add</button>
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
      <div className={classes.modal} ref={modal}>
        <p>Are you sure you want to add <span>{patient.name}</span> to queue?</p>
        <button onClick={() => moveToQueue(patient)}>Yes</button>
        <button onClick={() => closeModal()}>No</button>
      </div>
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
            let patient = item[0]
            // if nothing is being searched, return everything
            if(search === ''){
              return item[1]
            }
            let match = true
            // CHECK FOR DOB
            if(!Object.is(Number(search[0]), NaN)){ // if the search IS a number (DOB)
              for(let i = 0; i < search.length; i++){
                if(search[i] !== patient.dob[i]){
                  match = false
                  break
                }
              }
            // CHECK FOR NAME 
            } else {
              for(let i = 0; i < search.length; i++){
                if(search[i].toLowerCase() !== patient.name[i].toLowerCase()){
                  match = false
                  break
                }
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