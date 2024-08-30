import React from "react";
import {motion} from "framer-motion"
function EducationItem({ mainHeading, subHeading, date, grade }) {
  return (
    <div className="flex justify-between mb-7 h-15 overflow-hidden">
      <motion.div initial={{y:30}} whileInView={{y:0,transition:{duration:0.25}}}>
        <p>{mainHeading}</p>
        <p className="opacity-50">{subHeading}</p>
      </motion.div >
      <motion.div className="text-end " initial={{x:50}} whileInView={{x:0}}>
        <p className="font-extralight text-sm opacity-50">{date}</p>
        <p>{grade}</p>
      </motion.div>
    </div>
  );
}

export default EducationItem;
