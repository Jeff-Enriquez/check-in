import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import useStyles from './styles.js'

const NewList = ({ firebase, user }) => {
  const [userInput, setUserInput] = useState('')
  const [redirect, setRedirect] = useState(false)

  const classes = useStyles()

  const submitUserInput = () => {
    let input = userInput.split(/\n/)
    let data = []
    let number, name, dob
    for(let i=0; i < input.length; i++){
      [number, name, dob] = input[i].split(/\t/)
      if(!number){
        break
      }
      data.push({
        id: number,
        name: name,
        dob: dob
      })
    }
    firebase.addNewList(user.uid, data)
    setRedirect(true)
  }

  return (
    <>
    {redirect && <Redirect to='/check-in' /> }
    <div className={classes.page}>
      <h1 className={classes.pageTitle}>New List</h1>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <p className={classes.title}>Important</p>
          <p className={classes.titleInfo}>Adding a new list will remove the previous one.</p>
        </div>
        <p className={classes.heading}>Step 1:</p>
        <p className={classes.info}>Highlight the numbers and names column then copy.</p>
        <div className={classes.imgContainer}>
          <img className={classes.img} src='/images/step1.png' alt='coping the numbers column and names column'/>
        </div>
        <p className={classes.heading}>Step 2:</p>
        <p className={classes.info}>Paste the content below.</p>
        <div className={classes.textAreaContainer}>
          <textarea className={classes.textArea} placeholder="Paste content here." onChange={e => setUserInput(e.target.value)} value={userInput}></textarea>
          <p className={classes.footer}>Don't modify it after pasting it. It's ok if there is extra space.</p>
        </div>
        <p className={classes.heading}>Step 3:</p>
        <p className={classes.info}>Click the button below to add the new list.</p>
        <button className={classes.button} onClick={() => submitUserInput()}>Submit List</button>
      </div>
    </div>
    </>
  )
}

export default NewList