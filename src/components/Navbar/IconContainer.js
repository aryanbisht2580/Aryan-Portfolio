import React from 'react'
import {motion} from "framer-motion"
function IconContainer({children,dl,link}) {
  const clickHandler=()=>{
    const a=document.createElement('a');
    a.href=link;
    a.target="_blank";
    a.click();
  }
  return (
    <motion.div  onClick={clickHandler} initial={{y:100,opacity:0}} animate={{y:[null,-30,0],opacity:1,transition:{delay:dl,duration:.3}}}className='p-2 bg-slate-200 me-3 rounded-sm cursor-pointer'>
      {children}
    </motion.div>
  )
}

export default IconContainer