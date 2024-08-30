import React, { useState } from 'react'
import ProjectTech from './ProjectTech'
import {motion} from "framer-motion"
import { LuExternalLink } from "react-icons/lu";
function ProjectComponent({imageUrl,about}) {
  const clickHandler=()=>{
    const a=document.createElement("a");
    a.href=about.link;
    a.target="_blank";
    a.click();
  }
  const [z,setZ]=useState(0);
  return (
    <div className=' w-full text-white flex m-20 overflow-hidden flex-col md:flex-row relative'>
           <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:0.5}}} viewport={{once:true,amount:0.7}} className='flex-1   flex  justify-center items-center w-full  p-20 md:w-1/2 md:p-0'>
                <img  src={imageUrl} className={ `rounded-lg hover:blur-[1px] md:3/4 lg:w-2/3 cursor-pointer`} onClick={clickHandler} onMouseEnter={()=>setZ(100)} onMouseLeave={()=>setZ(0)}>
                </img>
                <motion.div  className={`absolute flex justify-center items-center opacity-[${z}] cursor-pointer duration-300`} onMouseEnter={()=>setZ(100)} onMouseLeave={()=>setZ(0)}>
                  <LuExternalLink size={30} color='rgb(167 139 250)'/>
                </motion.div>
           </motion.div>
           <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:0.5}}} viewport={{once:true,amount:0.7}} className='flex-1  px-20  gap-3 flex flex-col w-full md:w-1/2'>
              <h1 className='text-2xl cursor-pointer ' style={{color:"rgb(167 139 250)"}} onClick={clickHandler}>{about.name}</h1>
              <p className='text-sm opacity-50' >{about.info}</p>
              <div className='flex'>
                {about.tech.map((a)=>(
                  <ProjectTech text={a}/>
                ))}
              </div>
           </motion.div>
    </div>
  )
}

export default ProjectComponent