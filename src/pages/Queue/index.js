import React, { useState, useEffect, useRef } from 'react'
import useStyles from './styles.js'

const Header = ({ user, firebase }) => {
  const [list, setList] = useState(<></>)
  const modal = useRef(null)
  const [patient, setPatient] = useState({})

  const classes = useStyles()

  const closeModal = () => {
    modal.current.className = classes.modal
    setPatient({})
  }

  const removeFromQueue = patient => {
    firebase.removeFromQueue(user.uid, patient)
    closeModal()
  }
  
  const openModalAndSetPatient = patient => {
    modal.current.className = `${classes.modal} ${classes.display}`
    setPatient(patient)
  }

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
                <button onClick={() => openModalAndSetPatient(patient)}>Remove</button>
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
      <div className={classes.modal} ref={modal}>
        <p>Are you sure you want to remove <span>{patient.name}</span> from the queue?</p>
        <button onClick={() => removeFromQueue(patient)}>Remove</button>
        <button onClick={() => closeModal()}>No</button>
      </div>
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