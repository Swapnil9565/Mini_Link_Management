import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'
import styles from "../Components/Home.module.css"
const Home = () => {
  return (
    <div className={styles.home}>
        <div className={styles.Sidebar}>
        <Sidebar/>
        </div>
        <div className={styles.rightSection}>
        <Topbar/>
        <Outlet/>
        </div>
    </div>
  )
}

export default Home