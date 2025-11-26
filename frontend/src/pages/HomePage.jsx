import React, { useEffect } from 'react'

const HomePage = () => {

    useEffect(()=>{
        axios.get("http://localhost:5000/")
        .then(res => setMessage(res,req))

        .catch(err=>console.log(err));
        
    },[])
  return (
    <div>
        
    </div>
  )
}

export default HomePage