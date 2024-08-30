import React from 'react';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

function RightContact() {
  return (
    <div className='flex-1 h-1/2 flex flex-col justify-center items-center md:h-full '>
      <motion.h1
        initial={{ color: 'black',opacity:0}}
        whileInView={{
          color: ['black', 'white', 'rgb(167 139 250)'],
          opacity: 1,
          transition: { duration: 5 },
        }}
        className='text-[4vw] m-5 md:m-20'
      >
        Contact Me
      </motion.h1>
      <ContactForm />
    </div>
  );
}

export default RightContact;
