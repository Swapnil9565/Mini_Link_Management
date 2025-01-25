import React from 'react'
import styles from "../Components/Topbar.module.css"
const Topbar = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.profile}>
            <h1>Good Morning, <span>Swapnil</span></h1>
            <p>Tue,Jan 25</p>
        </div>
        <div className={styles.createLink}>
            <button>+ Create New</button>
            <input type="search" name="" placeholder='Search by Remarks'/>
            <h1>SW</h1>
        </div>
    </div>
  )
}

export default Topbar