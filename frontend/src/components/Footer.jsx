import React from 'react'
import '../css/Footer.css'
import logo from '../assets/SSIV_logo.png'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className='Footer' >
        <div className='footer_Main'>
      
          <div className='footer_left'>
          <img src={logo} alt=""  height="150px"/> 
          <p><b>SSIV</b> Realty is your trusted partner in buying , <br/>selling . and renting properties.</p>
          </div>
        
          <div className='footer_center1'>
            <h4>Quick Links</h4>
            <Link to='/'><p>Home</p></Link>
            <Link to='/'><p>Contact</p></Link>
            <Link to='/'><p>About Us</p></Link>
            <Link to='/'><p>Home</p></Link>
          </div>
        
          <div className='footer_center2'>
            <h4>Get In Touch</h4>
            <p>+91 9529803038<br/>
            +91 9119479555<br/>
            +91 9156412544<br/>
            +91 8830484815</p>

            <p>veda123@gmail.com<br/>
            ishwarishinde245@gmail.com<br/>
            shushti123@gmail.com<br/>
            sayalishelar@gamil.com</p>
          </div>
        
          <div className='footer_right'> 
            <h4>Support</h4>
            <p>Term & Conditions</p>
            <p>Privacy Policy</p>
            <p>Help Center</p>
            </div>
        </div>
      
        <div className='footer_bottom'>
          <p>2025 SSIV Realty . All Rights Reserved.</p>

        </div>

    </div>
  )
}

export default Footer