import React from 'react'
import { NavLink } from 'react-router-dom';
import "./error.css";

function Error() {
  return (
    <>
  <div className="d-flex justify-content-center align-items-center" id="main">
    <h1 className="display-1 mr-3 pr-3 align-top border-right inline-block align-content-center" id ="four">
      404
    </h1>
    <div className=" align-middle">
      <h2 className="d-inline font-weight-normal lead" id="desc">
        The page you requested was not found.
      </h2>
      <div className="pt-1 mb-4">
      <NavLink to="/">
      <button
                      className="btn btn-dark btn-lg btn-block"
                      type="button">
                      Return Home
                    </button>
              </NavLink>
                    
                  </div>
    </div>
    
  </div>
  </>
  )
}

export default Error