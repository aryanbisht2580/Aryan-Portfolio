import React from 'react'
import Block from './Block'
import Education from './Education'

function AboutInfo({choice}) {
  return (
    <>
    {choice=="skill" &&
    <div className='flex-1  overflow-hidden flex items-start justify-center'>
        <Block name="tailwind.png" pos={-100}/>
        <Block name="react.png" pos={-50}/>
        <Block name="postgre.png" pos={0}/>
        <Block name="mongo.png" pos={50}/>
        <Block name="node.png" pos={100}/>
    </div>}
    {
        choice=="education" &&
        <Education/>
    }

    </>
  )
}

export default AboutInfo