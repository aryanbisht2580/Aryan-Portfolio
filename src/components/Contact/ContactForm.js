import React, { useState } from "react";
import InputField from "./InputField";
import styles from "./button.module.css";
import {motion} from "framer-motion"
function ContactForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [min, setMin] = useState(false);
  const clickHandler=()=>{
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex mb-10">
        <div className="me-2">
          {/* <input className='bg-transparent' type='text' placeholder='Enter Name' value={name} onChange={(x)=>setName(x.target.value)}></input> */}
          <InputField
            type={"text"}
            placeholder={"Enter Name"}
            x={name}
            setX={setName}
            valy={50}
          ></InputField>
        </div>
        <div>
          {/* <input className='bg-transparent' type='email' placeholder='Enter Email' value={name} onChange={(x)=>setName(x.target.value)}></input> */}
          <InputField
            type={"email"}
            placeholder={"Enter Email"}
            x={email}
            setX={setEmail}
            valy={100}
          ></InputField>
        </div>
      </div>
      <div className="flex w-full mb-10">
        {/* <input  className='w-full bg-transparent' type='text' placeholder='Enter Message' value={name} onChange={(x)=>setName(x.target.value)}></input> */}
        <InputField
          type={"text"}
          placeholder={"Enter Message"}
          x={message}
          setX={setMessage}
          valy={150}
        ></InputField>
      </div>
      <motion.div
      onClick={clickHandler}
        initial={{y:20,opacity:0}}
        whileInView={{y:0,opacity:1,transition:{delay:0.25,duration:0.25}}}
        className={`p-3 rounded-lg cursor-pointer relative flex justify-center items-center  overflow-hidden w-1/3`}
        onMouseEnter={() => setMin(true)}
        onMouseOut={() => setMin(false)}
      >
        <div
          className={`h-full w-full absolute z-[-2] ${
            min ? styles.movein : styles.moveout
          }`}
          style={{ backgroundColor: "rgb(167 139 250)" }}
        >
          <div
            className="h-full w-full"
            style={{ backgroundColor: "white" }}
          ></div>
          <div
            className="h-full w-full"
            style={{ backgroundColor: "rgb(167 139 250)" }}
          ></div>
        </div>
        SEND
      </motion.div>
    </div>
  );
}

export default ContactForm;
