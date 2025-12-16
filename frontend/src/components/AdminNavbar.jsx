import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import SSIV_logo from '../assets/SSIV_logo.png'

const AdminNavbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/";
  }
  
  return (
    <div className='MainNav'>
      <div className='Innerdiv'>
        <div className='Nav_left'>
          <img src={SSIV_logo} alt="" height="80px" width="90px" />
        </div>
        <div className='Nav_center'>
          <Link to='/admin/add-category'><button className='btn'>+Add Listings</button></Link>
          {/* <Link to='/admin/add-product'><button className='btn'>+Add Product</button></Link> */}
          
        </div>
        
        
        <div className='Nav_right'>
        {/* <Link to='/register'><button className='btn right_btn'>Register</button></Link>
        <Link to='/login'><button className='btn right_btn'>Login</button></Link>
        <Link to='/admin_login'><button className='btn right_btn'>Admin</button></Link> */}

        <Link to='/logout'><button className='btn' onClick={logout}>Logout</button></Link>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar