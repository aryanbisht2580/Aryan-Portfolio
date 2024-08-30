import React, { useState } from 'react';
import styles from "./button.module.css"
function LeftContact() {
    const [min,setMin]=useState(false);
  return (
    <div className='flex-1 h-1/3  flex items-center justify-center flex-col p-2 gap-16 md:h-full '>
      <img src="./assets/contact.png" className='w-[70%]' alt='Contact' />
      <div 
        className={`p-3 rounded-lg cursor-pointer relative flex justify-center items-center  overflow-hidden`}
        onMouseEnter={()=>setMin(true)}
        onMouseOut={()=>setMin(false)}

      >
        <div 
          className={`h-full w-full absolute z-[-2] ${min? styles.movein:styles.moveout}`}
          style={{ backgroundColor: "rgb(167 139 250)"}} 

          
        >
          <div className='h-full w-full' style={{ backgroundColor: "white" }}></div>
          <div className='h-full w-full' style={{ backgroundColor: "rgb(167 139 250)" }}></div>
        </div>
        Download Resume
      </div>
    </div>
  );
}

export default LeftContact;
