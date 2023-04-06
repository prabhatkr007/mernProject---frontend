import React ,{useContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import {UserContext} from "../App";

const Logout = () => {
  const navigate = useNavigate();

  const logoutpage = async () => {
    try{ 
      const res = await fetch ('https://mernproject-backend.onrender.com/logout', {
        method: "GET",
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        credentials: "include"
      });

      if (res.status !== 200) {
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