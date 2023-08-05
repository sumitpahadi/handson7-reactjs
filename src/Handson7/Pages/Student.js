import React from 'react'
import StudentData from './StudentData'
import { useNavigate } from 'react-router-dom'
import "./style.css"

const Student = () => {
  const navigate=useNavigate();
  return (
    <>
    <div  className='Student'>
        <h1>Student's Details</h1>
        <div>
        <button onClick={()=>navigate('/addnewstudent')} className='stdbtn'>Add New Student</button>
       
        </div>
    </div>
    <StudentData/>
    </>
  )
}

export default Student