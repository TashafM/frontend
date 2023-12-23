import React, { useState } from 'react'
import './addbox.scss'
import { Button } from 'react-bootstrap'
import axios from 'axios'

const AddBox = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [age, setage] = useState("")

  const submitHandler = () => {
    if (name == "" || email == "" || age == "") {
      alert('All fields are required');
    } else {
      axios.post("http://localhost:5000/create-user", {
        name: name,
        email: email,
        age: age
      }).then(res => {
        setage('');
        setemail('');
        setname('');
        alert("User added successfully!!")
      })
        .catch((err) => console.error(`Error! ${err}`));
    }
  }

  return (
    <div className='addbox'>
      <input type="text" placeholder='Enter username' value={name} onChange={e => setname(e.target.value)} />
      <input type="email" placeholder='Enter user email' value={email} onChange={e => setemail(e.target.value)} />
      <input type="number" name="" id="" placeholder='Enter user age' value={age} onChange={e => setage(e.target.value)} />
      <Button onClick={submitHandler}>Add User</Button>
    </div>
  )
}

export default AddBox
