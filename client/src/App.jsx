import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function App() {
 const[name , setName] = useState()
 const[email , setEmail] = useState()
 const[password , setPassword] = useState()
const navigate = useNavigate()

const handleSubmit = (e)=>{
  e.preventDefault()
  axios.post("http://localhost:4000/register" , {
    name:name,
    email:email,
    password:password
  })
  .then(result => {console.log(result)
    navigate('/login')
  })
  .catch(err => console.log(err))

} 

  return (
    <div className='header'>
    
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
    <label htmlFor="Name">Name</label> <br />
    <input type="name" className="form-control" id="name"  placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
   
  </div>

  <div className="form-group">
    <label htmlFor="Email">Email</label><br />
    <input type="email" className="form-control" id="Email"  placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
   
  </div>
  <div className="form-group">
    <label htmlFor="Password">Password</label><br />
    <input type="password" className="form-control" id="Password" placeholder="Password" onChange={(e)=>setPassword (e.target.value)}/>
  </div>
 
  <button type="reg" >Register</button>
  <p>Already Have an Account</p>
  
</form>
<Link to='/login' type='login'>Login</Link>
    </div>
  )
}

export default App
