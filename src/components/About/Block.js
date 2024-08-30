import React from 'react'
import {motion} from "framer-motion"
function Block({name,pos}) {
  return (
    <motion.div initial={{x:pos,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:0.5}}} className='h-[5vw] w-[5vw] rounded-md overflow-hidden mx-[.5vw]'>
        <img src={`./assets/${name}`} className='h-full w-full'></img>
    </motion.div>
  )
}

export default Block