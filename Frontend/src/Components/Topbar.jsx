import React, { useEffect, useState } from 'react'
import styles from "../Components/Topbar.module.css"
import { useNavigate} from "react-router-dom"
const Topbar = ({setIsOpenModal}) => {

  const [userData,setUserData]=useState({});
  const [logoutBtn,setLogoutBtn]=useState(false);
  
  const navigate=useNavigate();

const handleLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setLogoutBtn(false);
    navigate("/"); 
}
const getPartOfDay=()=>{
  const currentHour = new Date().getHours();

  if (currentHour >= 6 && currentHour < 12) {
    return "☀️Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "🌤️Good Afternoon";
  } else if(currentHour >= 18 && currentHour < 22) {
    return "🌇Good Evening";
  } else{
    return "🌙Good Night";
  }
}
const partOfDay=getPartOfDay();

useEffect(()=>{
  const token=localStorage.getItem("token")
  const user=localStorage.getItem("user");
  if (!token || !user) {
    navigate("/");
  } else {
    setUserData(JSON.parse(user));
  }  
},[navigate]);

  return (
    <div className={styles.wrapper}>
        <div className={styles.profile}>
            <h1>{partOfDay}, <span>{userData?.user?.name}</span></h1>
            <p>{userData?.user?.formattedCreatedDate}</p>
        </div>
        <div className={styles.createLink}>
            <button onClick={()=>setIsOpenModal(true)}><i className="fa-solid fa-plus"></i>&nbsp; Create New</button>
            <div className={styles.searchContainer}>
            <i className="fa-solid fa-magnifying-glass" style={{color:"gray"}}></i>
            <input type="search" name="" placeholder='Search by Remarks'/>
            </div>
            <div className={styles.profileIcon}>
            <h1 onClick={() => setLogoutBtn(!logoutBtn)}>{userData?.user?.name.slice(0,2).toUpperCase()}</h1>
            </div>
            <div className={styles.logout}>
            {logoutBtn && <p onClick={handleLogout}>Logout</p>}
            </div>
        </div>
    </div>
  )
}

export default Topbar