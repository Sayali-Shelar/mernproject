

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/LoginRegister.css'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
  const [message, setMessage] = useState('');

  const handleChange = ((e) =>{ 
    setFormData({ ...formData, [e.target.name]: e.target.value })
  });

  const handleSubmit =async (e)=>{
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register',formData);
      setMessage('Registration Successfully');
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role',res.data.user.role);

      if(res.data && res.data.token){
        navigate('/login');
      }else{
        navigate('/register');

      }

      
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error');
      
    }

  }
   
  return (
    <div className='Lmain'>
      <div className='Lcenter'>
        <Link to='/'><img src='https://static.thenounproject.com/png/251451-200.png' alt='' className='backbtn'/></Link>
        <h2>Register</h2>
        
          <form onSubmit={handleSubmit}>
            <div className='Lcenter1'>
              <input name="name" placeholder="Name" onChange={handleChange} /><br/>
              <input name="email" placeholder="Email" onChange={handleChange} /><br/>
              <input type="password" name="password" placeholder="Password" onChange={handleChange}  /><br/>
              {/* <select name="role" onChange={handleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              </select><br/> */}
              <button type="submit">Register</button>
              <p>Already have an account ?&nbsp;&nbsp;<Link to='/login'> Login Now</Link></p>
              <p className='mess'>{message}</p>

            
            </div>
            
            
        </form>
      </div>
      
    </div>
  )
}

export default RegisterPage;