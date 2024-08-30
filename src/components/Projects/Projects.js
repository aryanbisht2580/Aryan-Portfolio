import React from "react";
import {motion} from "framer-motion"
import ProjectComponent from "./ProjectComponent";
function Projects() {
  return (
    <div
      className=" w-screen flex flex-col items-center pt-5 "
    >
      <div className="flex w-1/2 justify-center items-center h-1/6 relative mb-20">
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: "-100%", opacity: 0.2, transition: { duration: 1 } }}
          viewport={{}}
          className="z-10 absolute w-1/2 h-full bg-red-50 left-0"
        ></motion.div>
        <motion.h1
          className=""
          // style={{ fontSize: textSize, color:textcolor }}
          style={{ color: "white", fontSize: "3rem" }}
        >
          Projects
        </motion.h1>
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: "100%", opacity: 0.2, transition: { duration: 1 } }}
          className="z-10 absolute w-1/2 h-full bg-red-50 right-0"
          viewport={{}}
        ></motion.div>
        
      </div>
      
        <ProjectComponent imageUrl={"./assets/projects/journeys.png"} about={{name:"Journeys",link:"https://journeys-eta.vercel.app",info:"It is the ultimate platform for buying and selling branded shoes, offering a seamless experience for users to list, discover, and purchase footwear. With secure transactions powered by Razorpay, you can shop with confidence and ease. Our admin panel ensures efficient order management, making Journeys the go-to destination for all your shoe needs.",tech:["HTML","CSS","React","NodeJs","BootStrap"]}}/>
        <ProjectComponent imageUrl={"./assets/projects/clabble.png"} about={{name:"Clabble",link:"https://clabble.vercel.app",info:"Clabble is a modern chat application designed to connect people seamlessly. With Clabble, users can chat with anyone in the community, sign in effortlessly using their Google account, and share text, images, and emojis. Whether you're catching up with friends or collaborating with colleagues, Clabble makes communication simple and fun.",tech:["React","FireBase","Socket","Tailwind"]}}/>
        <ProjectComponent imageUrl={"./assets/projects/petify.png"} about={{name:"Petify",link:"https://petify-oqqd.onrender.com",info:"Petify is a React Native app where users can easily sell and adopt pets. Whether you're looking for a new pet or finding a home for one, Petify makes it simple to connect with others and ensure pets find the right homes.",tech:["React Native","Expo","Firebase"]}}/>
    </div>
  );
}

export default Projects;
