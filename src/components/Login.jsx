import React,{useContext, useState} from 'react'

import { NavLink ,useNavigate } from 'react-router-dom';
import {UserContext} from "../App";

function Login() {
  const {dispatch} = useContext(UserContext);


  const navigate = useNavigate();

      const [email, setEmail] = useState('');

      const [password, setPassword] = useState('');
      
      const loginUser = async (e) => {
        e.preventDefault();

        try {
          const res = await fetch("https://mernproject-backend.onrender.com/signin",{
            method: "POST",
            credentials: 'include',
            
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
          });
      
          const data = await res.json();
          console.log(data);
      
          if(res.status === 401 || !data) {
            window.alert("Invalid Credentials");
          } else {
            dispatch({type:"USER",payload:true})
            window.alert("Login Successful");
            navigate("/");
          }
        } catch (err) {
          console.error(err);
          window.alert("Failed to fetch");
        }
      };

  return (
    <>
  <section className="vh-100" style={{ backgroundColor: "#eee" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100 ">
      <div className="col col-xl-10 ">
        <div className="card shadow-lg p-3 mb-5"  style={{ borderRadius: "1rem" }}>
          <div className="row g-0 ">
            <div className="col-md-6 col-lg-5 d-none d-md-block ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                className="img-fluid"
                style={{ borderRadius: "1rem 0 0 1rem" }}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form method='POST' >
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i
                      className="fas fa-cubes fa-2x me-3"
                      style={{ color: "#ff6219" }}
                    />
                    <span className="h1 fw-bold mb-0">Logo</span>
                  </div>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Sign into your account
                  </h5>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example17"
                      name='email'
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Email'
                    />
                   
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example27"
                      className="form-control form-control-lg"
                      name='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Password'
                    />
                    
                  </div>
                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="button"
                      onClick={loginUser}
                    >
                      Login
                    </button>
                  </div>
                  
                  <p className="mb-5 pb-lg-2" style={{ color: "#black" }}>
                    Don't have an account?{" "}
                    <NavLink to="/signup" style={{ color: "#393f81" }}>
                      Register here
                    </NavLink>
                  </p>
                  
                </form>
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

export default Login