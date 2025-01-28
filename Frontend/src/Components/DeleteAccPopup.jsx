import React from 'react'
import styles from "../Components/DeleteAccPopup.module.css"
const DeleteAccPopup = ({setIsDeleteAccPopup,deleteAccount}) => {
  return (


    <div className={styles.popup}>
        <div className={styles.popupContainer}>
           <i onClick={()=>setIsDeleteAccPopup(false)} className="fa-solid fa-x"></i>
            <p> Are you sure, you want to delete the account ? </p>
            <div className={styles.buttons}>
                <button className={styles.noBtn} onClick={()=>setIsDeleteAccPopup(false)}>No</button>
                <button className={styles.yesBtn} onClick={deleteAccount}>Yes</button>
            </div>
        </div>
    </div>

  )
}

export default DeleteAccPopup