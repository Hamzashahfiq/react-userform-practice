import logo from './logo.svg';

import react, { useState } from "react";
import './App.css';
import Header from './componet/header/Header';
import MainContent from './componet/mainContent/MainContent';
import { userData } from './constant/UserData';

const data = [{
  User_Name: 'hamza',
  Email: 'hamza@test.com',
  Roll_No: '3500',
  Class_Name:'Computer'
} ]

function App() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [className, setClassName] = useState('')
  const [students, setStudents] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)

  function submithandler() {
    if (!userName || !email || !rollNo || !className) {
      alert("All user data required")
      return;
    }
    console.log('Value: ', userName, email, rollNo, className)
    let student = {
      User_Name: userName,
      Email: email,
      Roll_No: rollNo,
      Class_Name: className

    }
    setStudents([...students, student])

    setUserName('');
    setEmail('');
    setRollNo('');
    setClassName('');
    
  }
  const deleteHandler = (Email) => {
    console.log(Email)      
    let newStudent = students.filter((item) => item.Email !== Email )
    setStudents(newStudent);
  }
  const updateHandler = (item) => {
    setUserName(item.User_Name);
    setEmail(item.Email);
    setRollNo(item.Roll_No);
    setClassName(item.Class_Name);
    setIsUpdate(true)

  }

  const ctaUpdate = () => {
     
    let student = {
      User_Name: userName,
      Email: email,
      Roll_No: rollNo,
      Class_Name: className
    }

    let newStudent = students.map((item, index) => {
         if (item.Email === email){
             return student;
         }else {
            return item;
         }

    })

    
    setStudents(newStudent);
    
    
    setUserName('');
    setEmail('');
    setRollNo('');
    setClassName('');
    setIsUpdate(false)
  }

  return (
    <>
      <div style={{ margin: '10px' }}>
        <h4>User get data app</h4>
        <div>User Name: <input onChange={(e) => setUserName(e.target.value)} value={userName} placeholder='Enter your name' type='text' /></div>
        <div>Email: <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter your Email' type='text' /></div>
        <div>Roll No: <input onChange={(e) => setRollNo(e.target.value)} value={rollNo} placeholder='Enter your Roll No' type='text' /></div>
        <div>Class Name: <input onChange={(e) => setClassName(e.target.value)} value={className} placeholder='Enter your Class Name' type='text' /></div>
        {
          isUpdate ? <button onClick={ctaUpdate}>Update</button> :<button onClick={submithandler}>Submit</button>
        }
        

        <h3>list of user data</h3>
        <table style={{ borderCollapse: 'collapse' }}>
          <tr style={{ border: '1px solid black' }}>
            <th>Sr No.</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Class Name</th>
            <th>Action</th>
          </tr>
          {students.map((item, index) => {
            return (
              <tr key={index} style={{ border: '1px solid black' }}>
                <td>{index + 1}</td>
                <td>{item.User_Name}</td>
                <td>{item.Email}</td>
                <td>{item.Roll_No}</td>
                <td>{item.Class_Name}</td>
                <td style={{ border: '1px solid black' }}><button onClick={() => updateHandler(item)}>Update</button><button onClick={() => deleteHandler(item.Email)} >Delete</button></td>
              </tr>
            )
          })}
         

        </table>
      </div>
    </>
  );
}

export default App;
