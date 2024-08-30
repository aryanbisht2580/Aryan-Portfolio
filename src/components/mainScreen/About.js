import React from "react";
import {motion} from "framer-motion"
function About() {
  return (
    <div className="flex flex-1 flex-col justify-center text-gray-300 p-5">
      <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1,transition:{delay:0.25,duration:.25}}} className="text-3xl ps-3 md:text-5xl">Hi, I Am</motion.div>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{delay:1,duration:1}}}  className="text-5xl text-violet-400 my-3 md:text-7xl">ARYAN</motion.div>
      <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:0.5,transition:{delay:0.25,duration:.5}}}  className="font-thin text-[10px] opacity-0 mb-12 md:text-xs">Web & App Developer</motion.div>
      <motion.p  initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1,transition:{delay:0.25,duration:.5}}}  className="text-justify font-thin text-[10px] md:text-base " >
        a skilled web and app developer with expertise in React.js, Next.js,
        MongoDB, Tailwind CSS, PostgreSQL, and Firebase. I bring a deep
        understanding of these technologies to create dynamic and responsive
        applications, ensuring a seamless user experience and robust backend
        functionality. My commitment to mastering the latest tools and
        frameworks allows me to deliver cutting-edge solutions that meet and
        exceed client expectations.
      </motion.p>
    </div>
  );
}

export default About;
