import React from 'react'
import {motion} from "framer-motion"
function InputField({x,setX,placeholder,type,valy}) {
    console.log(x);
  return (
    <motion.div initial={{y:valy}} whileInView={{y:0, borderBottom:"1px solid white",transition:{duration:0.5}}} className='w-full  py-2' >       
        {placeholder!='Enter Message'?<input className='bg-transparent w-full text-white  focus:outline-none px-2'  type={type} placeholder={placeholder} value={x} onChange={(x)=>setX(x.target.value)}></input>
            :<textarea  className='bg-transparent w-full text-white flex justify-end items-end focus:outline-none px-2'  type={type} placeholder={placeholder} value={x} onChange={(x)=>setX(x.target.value)}></textarea>
        }
    </motion.div>
  )
}

export default InputField