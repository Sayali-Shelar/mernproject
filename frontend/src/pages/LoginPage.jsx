import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import '../css/LoginRegister.css'

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      setMessage('Login successful!');
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role',res.data.user.role);
      
      if(res.data.user.role==='admin'){
        navigate('/admin/dashboard');
      }else{
        navigate('/user/dashboard');

      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div className='Lmain'>
      <div className='Lcenter'>
        <Link to='/'><img src='https://static.thenounproject.com/png/251451-200.png' className='backbtn' alt=''/></Link>
        <h2>Login</h2>
          <form onSubmit={handleSubmit}>
              <div className='Lcenter1'>
                <input name="email" placeholder="Email" onChange={handleChange} /><br/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br/>
                <button type="submit">Login</button>
                <p>
                 Do not have account ?&nbsp;<Link to='/register'>Register Now</Link></p>
                <p className='mess'>{message}</p>
              </div>
          </form>
      
      </div>
    </div>
  );
}

export default LoginPage;
