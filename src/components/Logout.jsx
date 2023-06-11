
import React , {useContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import {UserContext} from "../App";

const Logout = () => {
  const {dispatch} = useContext(UserContext);
  const navigate = useNavigate();

  const logoutpage = async () => {
    try{ 
      const res = await fetch ('https://mernproject-backend-uuli.onrender.com/signout', {
        method: "GET",
        credentials: 'include',
        headers: {'Content-Type': 'application/json'}
      });
      if(res.status === 200){
        dispatch({type:"USER",payload:false})
      }
     
     else{
        const err = new Error(res.error);
        throw err;
     } 
    
    } catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    logoutpage();
    navigate('/login');
  }, [navigate]);

    

  return (
    <>Loging out...</>
  )
}

export default Logout