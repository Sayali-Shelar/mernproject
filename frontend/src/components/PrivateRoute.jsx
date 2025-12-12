
import { Navigate } from "react-router-dom";

export const PrivateRoute =(({children , role})=>{
    const token = localStorage.getItem('token');
    const savedRole = localStorage.getItem('role');

    if(!token){
        return <Navigate to='/login'/>;
    }

    if(role && role !== savedRole)
    {
        return <Navigate to='/unauthorized'/>

    }
    return children;

})