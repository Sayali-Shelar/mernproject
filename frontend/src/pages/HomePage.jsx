import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import '../css/HomePage.css'


const HomePage = () => {
  const [massage , setMessage] = useState('')

    useEffect(()=>{
        axios.get("http://localhost:5000/")
        .then(res => setMessage(res.data))

        .catch(err=>console.log(err));
        
    },[])
  return (
    <div className='Main'>
      
      <Navbar/>

      


      <p>{massage}</p>
        
    </div>
  )
}

export default HomePage