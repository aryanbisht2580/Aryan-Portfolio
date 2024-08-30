import React from 'react'

function ProjectTech({text}) {
  return (
    <div className='px-2 py-1 mr-2 rounded-md' style={{backgroundColor:"#dfd7f5"}}>
      <p className='text-purple-600 text-nowrap'>{text}</p>
    </div>
  )
}

export default ProjectTech