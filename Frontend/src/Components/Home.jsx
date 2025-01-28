import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import styles from "../Components/Home.module.css";
import CreateLinkModal from "./CreateLinkModal";
const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
 
  return (
    <div className={styles.home}>
      <div className={styles.Sidebar}>
        <Sidebar />
      </div>
      <div className={styles.rightSection}>
        <Topbar setIsOpenModal={setIsOpenModal} />
        <Outlet/>
        {isOpenModal && (
          <div className={styles.modal}>
            <CreateLinkModal setIsOpenModal={setIsOpenModal} />
          </div>
        )}
      
        {/* <EditLinkModal/> */}
      </div>
    </div>
  );
};

export default Home;
