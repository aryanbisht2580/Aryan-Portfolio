import React from 'react'
import Image from './Image';
import About from './About';

function MainSc() {
  return (
    <div className='flex h-[90vh] flex-col md:flex-row'>
        <About/>
        <Image/>

    </div>
  )
}

export default MainSc;