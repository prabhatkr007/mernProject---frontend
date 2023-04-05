import React ,{useContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import {UserContext} from "../App";

const Logout = () => {
    // const {state, dispatch} = useContext(UserContext);
    const navigate = useNavigate();
   
  const logoutpage = async () => {
    try{ 
        const res = await fetch ('https://mernproject-backend.onrender.com/logout',{
          method : "GET",
          // headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
          headers: {'Content-Type': 'application/json'},
          credentials:"include"
        });
        // dispatch({type:"USER",payload:false});
        navigate('/login');
      if(res.status !== 200){
        const err = new Error(res.error);
        throw err;
        
      }
      
  
    } catch(err){
        console.log(err);
        
    }
    
    }
   
    

    useEffect(() => {
        logoutpage();
      
        
      }, [])

    

  return (
    <>Logout</>
  )
}

export default Logout