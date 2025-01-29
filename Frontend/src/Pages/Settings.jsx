import React, { useEffect, useState } from 'react'
import axios from "axios"
import styles from "./Settings.module.css";
import { useNavigate } from 'react-router-dom';
import DeleteAccPopup from '../Components/DeleteAccPopup';

const Settings = () => {
   
  const [isOpenDeleteAccPopup,setIsOpenDeleteAccPopup]=useState(false);
   const [formData,setFormData]=useState({name:"",email:"",mobile:""})
   const navigate=useNavigate();
  
  var baseUrl = import.meta.env.VITE_API_BASE_URL;
  const fetchUserData=async()=>{
    const res=await axios.get(`${baseUrl}/api/user/getUserData`,{
      headers:{
        "Content-Type":"application/json",
        "Authorization":localStorage.getItem("token")
      }
    })
    if(res.status===200){
      const {name,email,mobile}=res.data.userData;
      setFormData({
        name,email,mobile
      })
    }else{
      alert(res.data.message);
    }
   
  }

const handleChange=(e)=>{
   const {name,value}=e.target;
   setFormData({...formData,[name]:value})
}
  const handleSubmit=async(e)=>{
      e.preventDefault();

      try {
        
       const res=await axios.patch(`${baseUrl}/api/user/updateUser`,formData,{
        headers:{
          "Content-Type":"application/json",
          "Authorization":localStorage.getItem("token")
        }
       })
       alert("User details updated successfully");
       localStorage.removeItem("user")
       localStorage.removeItem("token")
       navigate("/");
       setTimeout(()=>{
         alert("Please, login with your updated email id");
       },1000)

      } catch (error) {
         alert(error);
      }
  }
  


  useEffect(()=>{
    fetchUserData();
  },[])

  const deleteAccount=async()=>{
    try {
      const res=await axios.delete(`${baseUrl}/api/user/deleteUser`,{
        headers:{
          "Content-Type":"application/json",
          "Authorization":localStorage.getItem("token")
        }
      })
      if(res.status===200){
         
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            alert(res.data.message);
            navigate("/");
      }
    } catch (error) {
       alert(error);
    }
  
  }

  return (
    <>
     <div className={styles.formContainer}>
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
              onChange={handleChange}
          className={styles.formInput}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Email ID</label>
        <input
          type="email"
          name="email"
          value={formData.email}
               onChange={handleChange}
          className={styles.formInput}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Mobile No.</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
                onChange={handleChange}
          className={styles.formInput}
        />
      </div>
      <div className={styles.buttonGroup}>
        <button
          type="submit"
          className={styles.saveButton}
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={()=>setIsOpenDeleteAccPopup(true)}
          className={styles.deleteButton}
        >
          Delete Account
        </button>
      </div>
    </form>
  </div>
  {isOpenDeleteAccPopup&&
      
      <DeleteAccPopup deleteAccount={deleteAccount} setIsDeleteAccPopup={setIsOpenDeleteAccPopup}/>

   }
    </>
   
  )
}

export default Settings