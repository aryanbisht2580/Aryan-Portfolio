import React from 'react'
import {motion} from "framer-motion"
function Image() {
  return (
    <div className=' flex flex-1 items-center justify-center'>
        <motion.div initial={{rotate:0,borderRadius:0}} animate={{borderRadius:"20%",transition:{duration:2}}}className='w-[35vw] h-[35vw] md:w-80 md:h-80 overflow-hidden'>
            <motion.img initial={{rotate:0}} animate={{radius:40,transition:{duration:1}}}src={"./img/img.jpg"} className='h-full w-full'></motion.img>
        </motion.div>
    </div>
  )
}

export default Image