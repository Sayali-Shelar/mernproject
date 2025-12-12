import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  }
  return (
    <div className='MainNav'>
      <div className='Innerdiv'>
        <Link to='/'><button className='btn'>Home</button></Link>
        <Link to='/register'><button className='btn'>Register</button></Link>
        <Link to='/login'><button className='btn'>Login</button></Link>
        <Link to='/logout'><button className='btn' onClick={logout}>Logout</button></Link>
      </div>
    </div>
  )
}

export default Navbar