import React ,{useState} from 'react'

import { NavLink, useNavigate } from 'react-router-dom';

const  Signup = () => {
  const navigate = useNavigate();

const [user, setUser] = useState({
  name:"", email:"", phone:"", work:"", password:"",cpassword:""
});

let name, value;

const handleInputs = (e) => {
 
  name = e.target.name;
  value = e.target.value;

  setUser ({...user, [name]: value});
}

const PostData = async (e) => {
    e.preventDefault();
    const {name, email, phone, work, password,cpassword} = user;

    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, work, password, cpassword }),
      });
  
      const data = await res.json();
  
      if (data.status === 422) {
        window.alert("Email already exists");
      } else if (data.status === 500 || !data) {
        window.alert("Registration failed !");
        console.log("Registration failed !");
      } else {
        console.log(res.error);
        window.alert("Registration Successful !");
        console.log("Registration Successful !");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Something went wrong!");
    }
  };
  



  return (
    
  <>
  <section className="vh-100"style={{ backgroundColor: "#eee" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card shadow-lg p-3 mb-5" style={{ borderRadius: "1rem" }}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>
                  <form method ="POST" onSubmit={PostData} className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="name"
                          name ="name"
                          className="form-control"
                          value ={user.name}
                          onChange = {handleInputs}
                          placeholder='Name'
                          
                         
                        />
                        
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          id="email"
                          name='email'
                          className="form-control"
                          placeholder='Email'
                          value ={user.email}
                          onChange = {handleInputs}
                        />
                        
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="phone"
                          name='phone'
                          className="form-control"
                          placeholder='Phone'
                          value = {user.phone}
                          onChange = {handleInputs}
                        />
                        
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="work"
                          name='work'
                          className="form-control"
                          placeholder='Profession'
                          value ={user.work}
                          onChange = {handleInputs}
                        />
                       
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="password"
                          name='password'
                          className="form-control"
                          placeholder='Password'
                          value ={user.password}
                          onChange = {handleInputs}
                        />
                        
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="cpassword"
                          name='cpassword'
                          className="form-control"
                          placeholder='Repeat your password'
                          value ={user.cpassword}
                          onChange = {handleInputs}
                        />
                        
                      </div>
                    </div>
                    
                    <div className="d-flex conte mx-3 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-dark btn-lg" name='signup' 
                       onClick={PostData} > Register  </button>
                      
                    </div>

                    <div className='d-flex conte mx-3 mb-3 mb-lg-4'>
                    <NavLink to = "/login" className ="signup-image-link" style={{ color: "#393f81" }}>I am already registered</NavLink>
                    </div>
                    
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid"
                    alt="Sample"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</>

  
  )
}

export default Signup