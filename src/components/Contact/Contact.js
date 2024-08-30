import React from 'react'
import LeftContact from './LeftContact'
import RightContact from './RightContact'

function Contact() {
  return (
    <div className='h-screen w-screen flex flex-col md:flex-row overflow-hidden'>
        <LeftContact/>
        <RightContact/>
    </div>
  )
}

export default Contact