import React from "react";
import  Logo  from "../assets/Logo.png";
import dashboardIcon from "../assets/dashboard-icon.svg";
import linksIcon  from "../assets/links-icon.svg";
import analyticsIcon  from "../assets/analytics-icon.svg";
import settingIcon  from "../assets/settings.svg";
import { NavLink } from "react-router-dom";
import styles from "../Components/Sidebar.module.css"
const Sidebar = () => {
  return (
        <div className={styles.sidebar}>
        <div>
        <img src={Logo} alt='' />
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>
            <img src={dashboardIcon} alt='' />
            Dashboard</NavLink> 
          </li>
          <li>
            <NavLink to="/links" className={({ isActive }) => (isActive ? styles.active : "")} >
            <img src={linksIcon} alt='' />
            Links</NavLink> 
          </li>
          <li>
            <NavLink to="/analytics" className={({ isActive }) => (isActive ? styles.active : "")}>
            <img src={analyticsIcon} alt='' />
            Analytics</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.setting}>
        <li>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? styles.active : "")}>
        <img src={settingIcon} alt='' />
        Setting</NavLink>
        </li>
      </div>
       </div>
  
  );
};

export default Sidebar;
