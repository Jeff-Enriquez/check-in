import React from 'react'
import useStyles from './styles.js'

const Header = () => {
  const classes = useStyles()

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
          <li className={classes.tableRow}>
            <div className={`${classes.col} ${classes.col1}`}>1000</div>
            <div className={`${classes.col} ${classes.col2}`}>John Doe</div>
            <div className={`${classes.col} ${classes.col3}`}>
              <button>Remove</button>
            </div>
          </li>
          <li className={classes.tableRow}>
            <div className={`${classes.col} ${classes.col1}`}>142</div>
            <div className={`${classes.col} ${classes.col2}`}>Jennifer Smith</div>
            <div className={`${classes.col} ${classes.col3}`}>
              <button>Remove</button>
            </div>
          </li>
          <li className={classes.tableRow}>
            <div className={`${classes.col} ${classes.col1}`}>398</div>
            <div className={`${classes.col} ${classes.col2}`}>John Smith</div>
            <div className={`${classes.col} ${classes.col3}`}>
              <button>Remove</button>
            </div>
          </li>
          <li className={classes.tableRow}>
            <div className={`${classes.col} ${classes.col1}`}>10</div>
            <div className={`${classes.col} ${classes.col2}`}>John Carpenter</div>
            <div className={`${classes.col} ${classes.col3}`}>
              <button>Remove</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header