import React from 'react'
import { useSelector } from 'react-redux'
import "./style.css"
import { useNavigate } from 'react-router-dom';

const StudentData = () => {
    const navigate=useNavigate();
    const data=useSelector((state)=>state.Student);
    // console.log(data)
  return (
    <div>
        {
          <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Batch</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Batch}</td>
                <td>{item.Course}</td>
                <td>
                  <button
                    onClick={() => {
                      const id = item.id;
                      navigate('/editstudent', { state: id });
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        }
    </div>
  )
}

export default StudentData