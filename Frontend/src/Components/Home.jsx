import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'
import styles from "../Components/Home.module.css"
import CreateLinkModal from './CreateLinkModal'
import EditLinkModal from './EditLinkModal'
const Home = () => {
  const [isOpenModal,setIsOpenModal]=useState(false);
  return (
        
    <div className={styles.home}>
        <div className={styles.Sidebar}>
        <Sidebar/>
        </div>
        <div className={styles.rightSection}>
        <Topbar setIsOpenModal={setIsOpenModal}/>
        <Outlet/>
        <div className={styles.modal}>
     {isOpenModal?<CreateLinkModal setIsOpenModal={setIsOpenModal}/>:<></>}
     {/* <EditLinkModal/> */}

        </div>
        </div>
    </div>
    
    )
}

export default Home