import React from 'react'
import styles from "../Components/CreateLinkModal.module.css";
const CreateLinkModal = ({setIsOpenModal}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <p>New Link</p>
            <i onClick={()=>setIsOpenModal(false)} className="fa-solid fa-x" style={{cursor:"pointer"}}></i>
        </div>
        <div className={styles.formContainer}>
            <form>
                <div  className={styles.fields}>
                    <label htmlFor="">Destination URL</label>
                    <input type="text" placeholder='https://web.whatsapp.com/'/>
                </div>
                <div className={styles.fields}>
                    <label htmlFor="">Remarks</label>
                    <textarea name="" id="" placeholder='Add Remarks'></textarea>
                </div>
                <div className={styles.fields}>
                    <label htmlFor="">Link Expiration</label>
                   <input type="date" name="" id="" />
                </div>
            </form>
        </div>
        <div className={styles.bottom}>
            <button className={styles.clear}>Clear</button>
            <button className={styles.createBtn}>Create New</button>
        </div>
    </div>
  )
}

export default CreateLinkModal