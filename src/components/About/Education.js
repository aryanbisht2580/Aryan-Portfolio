import React from 'react'
import EducationItem from './EducationItem'

function Education() {
  return (
    <div className='text-white'>
        <div>
            <EducationItem mainHeading={"University Of Petroleum and Energy Studies, Dehradun"} subHeading={"Btech CSE"} date={"2022-26"} grade={"CGPA - 8.8"}/>
            <EducationItem mainHeading={"The Asian School"} subHeading={"Class - 12th"} date={"2021-22"} grade={"Percentage - 94.5%"}/>
            <EducationItem mainHeading={"The Asian School"} subHeading={"Class - 10th"} date={"2019-2020"} grade={"Percentage - 93%"}/>
            

            

        </div>
    </div>
  )
}

export default Education