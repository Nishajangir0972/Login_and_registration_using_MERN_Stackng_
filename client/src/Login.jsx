import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
 const[email , setEmail] = useState()
 const[password , setPassword] = useState()
const navigate = useNavigate()

const handleSubmit = (e)=>{
  e.preventDefault()
  axios.post("http://localhost:4000/login" , {
    email:email,
    password:password
  })
  .then(result => {console.log(result)
    if(result.data === "Success"){
        navigate('/home')
    }
    
  })
  .catch(err => alert("Password is incorrect"))

} 

  return (
    <div className='header'>
    
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="Email">Email</label><br />
    <input type="email" className="form-control" id="Email"  placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
   
  </div>
  <div className="form-group">
    <label htmlFor="Password">Password</label><br />
    <input type="password" className="form-control" id="Password" placeholder="Password" onChange={(e)=>setPassword (e.target.value)}/>
  </div>
 
  <button type="login" >Login</button>
  <p>Already Have an Account</p>
  
</form>
<Link to='/home' type='register' >SignUp</Link>
    </div>
  )
}

export default Login