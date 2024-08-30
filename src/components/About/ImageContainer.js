import React from 'react'
import {abt} from '../../contants/abt'
import {motion} from "framer-motion"
function ImageContainer({name}) {
  return (
    <div className=' h-[30vw] w-[30vw] rounded-lg overflow-hidden'>
        <motion.img className='w-full h-full' key={name} initial={{y:100}} animate={{y:0, transition:{duration:.25}}} src={abt[name].imgUrl}></motion.img>
    </div>
  )
}

export default ImageContainer