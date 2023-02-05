import React,{useEffect,useState} from 'react'

const Home = () => {

  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);



  const homePage = async () => {
  try{ 
      const res = await fetch ('https://mernproject-backend.onrender.com/getdata',{
        method : "GET",
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        
      });

    const data = await res.json();
    console.log(data);
    setUserName(data.name);
    setShow(true);

  } catch(err){
      console.log(err);
      
  }
}

  useEffect(() => {
    homePage();
  
    
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