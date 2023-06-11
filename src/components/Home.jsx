import React,{useContext,useEffect,useState} from 'react'
import {UserContext} from "../App";

const Home = () => {
  const {dispatch} = useContext(UserContext);

  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);


  const hello = async () => {

        
    try{ 
         const res = await fetch ('https://mernproject-backend-uuli.onrender.com/hello',{
          method : "GET",
          headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
          
        });
  
      const data = await res.json();
      console.log(data);
  
    } catch(err){
        console.log(err);
        
    }
  }
  const homePage = async () => {
    try{ 
        const res = await fetch ('https://mernproject-backend-uuli.onrender.com/getdata',{
          method : "GET",
          headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
          credentials: 'include'
          
        });
  
      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      dispatch({type:"USER",payload:true})
      setShow(true);
  
    } catch(err){
        console.log(err);
        
    }
  }
  
  useEffect(() => {
    homePage();
    hello();
  
    
  }, [])
  
  
  return (
    <div className='home-page'>
      <div className='home-div'>
          {/* <p className='pt-5'>Welcome</p> */}
          <h1 className="fw-bolder">{userName}</h1>
          <h2> { show? 'Happy, to see you back ' : 'We Are the Mern Developer'}</h2>
      </div>
      
    </div>
  )
}

export default Home