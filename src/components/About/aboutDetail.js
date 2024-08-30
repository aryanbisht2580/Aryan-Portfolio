import { useScroll, useTransform, motion, useSpring, delay } from "framer-motion";
import React, { useRef, useState } from "react";
import ImageContainer from "./ImageContainer";
import AboutNav from "./AboutNav";
import AboutInfo from "./AboutInfo";
function AboutDetail() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const textSize = useTransform(scrollYProgress, [0, 1], ["1rem", "7rem"]);
  const textcolor = useTransform(scrollYProgress, [0, 1], ["black", "white"]);
  const [choice, setChoice] = useState("skill");

  // Convert textcolor to a spring value

  return (
    <div ref={ref} className="h-screen w-screen flex flex-col items-center pt-5 mb-20">
      <div className="flex w-1/2 justify-center items-center h-1/7 relative ">
        <motion.div initial={{x:0}} whileInView={{x:"-100%",opacity:[null,0.2], transition:{duration:1}}} className="z-10 absolute w-1/2 h-full bg-red-50 left-0"></motion.div>
        <motion.h1
          className=""
          // style={{ fontSize: textSize, color:textcolor }}
          style={{ color: textcolor, fontSize: "3rem" }}
        >
          About
        </motion.h1>
        <motion.div initial={{x:0}} whileInView={{x:"100%",opacity:[null,0.2], transition:{duration:1}}} className="z-10 absolute w-1/2 h-full bg-red-50 right-0"></motion.div>
      </div>
      <div className="flex flex-col h-5/6 w-full md:pd-20 md:flex-row  justify-center ">
        <div className="flex  justify-center items-center p-10 w-full md:w-1/3  ">
          <ImageContainer name={choice} />
        </div>
        <div className="flex-1 flex flex-col justify-start   pt-20" >
          <AboutNav choice={choice} setChoice={setChoice} />
          <AboutInfo choice={choice} />
        </div>
      </div>
    </div>
  );
}

export default AboutDetail;
