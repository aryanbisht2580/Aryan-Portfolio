import React from 'react'
import styles from "./active.module.css"
function AboutNav({choice,setChoice}) {
  return (
    <div className='h-20 w-full p-20 text-white flex justify-around me-5'>
        <div className={ choice=="skill" && styles.active}  style={{cursor:"pointer"}} onClick={()=>{setChoice("skill")}}>
            Skills
        </div>
        <div className={choice=='education' && styles.active} style={{cursor:"pointer"}} onClick={()=>{setChoice("education")}}>
            Education
        </div>
    </div>
  )
}

export default AboutNav