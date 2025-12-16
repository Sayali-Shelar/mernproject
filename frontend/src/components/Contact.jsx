import React from 'react'
import '../css/Contact.css'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className='Contact_Main'>
        <div className='C_Left'>
          <img src="" alt="" />
          <p>Name : </p>
          <p> Email :</p>
          <p>Intro :</p>
        </div>
        <div className='C_Mid'>
          <img src="" alt="" />
          <p>Name : </p>
          <p> Email :</p>
          <p>Intro :</p>
        </div>
        <div className='C_Center'>
          <img src="" alt="" />
          <p>Name : </p>
          <p> Email :</p>
          <p>Intro :</p>
        </div>
        <div className='C_Right'>
          <img src="" alt="" />
          <p>Name : </p>
          <p> Email :</p>
          <p>Intro :</p>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Contact