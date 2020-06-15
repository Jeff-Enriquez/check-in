import React from 'react'
import useStyles from './styles.js'
import { connect } from 'react-redux'

const CheckIn = () => {
  const classes = useStyles()
  console.log(this.props)
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
          <li className={classes.tableRow}>
            <div className={`${classes.col} ${classes.col1}`}>1000</div>
            <div className={`${classes.col} ${classes.col2}`}>John Doe</div>
            <div className={`${classes.col} ${classes.col3}`}>
              <button>Add</button>
            </div>
          </li>
          <li className={classes.tableRow}>
            <div className={`${classes.col} ${classes.col1}`}>142</div>
            <div className={`${classes.col} ${classes.col2}`}>Jennifer Smith</div>
            <div className={`${classes.col} ${classes.col3}`}>
              <button>Add</button>
            </div>
          </li>
          <li className={classes.tableRow}>
            <div className={`${classes.col} ${classes.col1}`}>398</div>
            <div className={`${classes.col} ${classes.col2}`}>John Smith</div>
            <div className={`${classes.col} ${classes.col3}`}>
              <button>Add</button>
            </div>
          </li>
          <li className={classes.tableRow}>
            <div className={`${classes.col} ${classes.col1}`}>10</div>
            <div className={`${classes.col} ${classes.col2}`}>John Carpenter</div>
            <div className={`${classes.col} ${classes.col3}`}>
              <button>Add</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    list: state.list.list
  }
}
export default connect(mapStateToProps)(CheckIn)