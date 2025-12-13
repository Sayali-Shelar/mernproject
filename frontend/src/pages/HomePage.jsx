import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import '../css/HomePage.css'
import Footer from '../components/Footer'


const HomePage = () => {
  const [massage , setMessage] = useState('')

    useEffect(()=>{
        axios.get("http://localhost:5000/")
        .then(res => setMessage(res.data))

        .catch(err=>console.log(err));
        
    },[])
  return (
    <div >
      <Navbar/>
      <div className='Home_Main'>
      <p>{massage}</p>
      </div>
      <div className='Hero_Section'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, facere.
      </div>
      
      
      


      <div>
        <Footer/>

      </div>
    </div>
  )
}

export default HomePage