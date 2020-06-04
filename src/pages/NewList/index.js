import React from 'react'
import useStyles from './styles.js'

const NewList = () => {
  const classes = useStyles()

  return (
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
        <p className={classes.info}>Click the button below to add the new list.</p>
        <button className={classes.button}>Submit List</button>
      </div>
    </div>
  )
}

export default NewList