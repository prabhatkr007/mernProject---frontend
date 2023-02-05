import React,{useEffect,useState} from 'react'
import "./abouts.css";
import { useNavigate } from 'react-router-dom';

function About() {


  const navigate = useNavigate();

  const [userData, setUserData] = useState('');

  const veryPage = async () => {
  try{ 
      const res = await fetch ('/about',{
        method : "GET",
        // headers: { Accept: 'application/json', 'Content-Type': 'application/json'},
        headers: {'Content-Type': 'application/json'},
        
      });

    const data = await res.json();
    console.log(data);
    setUserData(data);

    if(!res.status === 200){
      const err = new Error(res.error);
      throw err;
    }

  } catch(err){
      console.log(err);
      navigate('/login');
  }

  }

  useEffect(() => {
    veryPage();
  
    
  }, [])
  


  return (
    <>
     <div className="container emp-profile shadow-lg p-3 mb-5">
  <form method="post">
    <div className="row">
      <div className="col-md-4">
        <div className="profile-img">
          <img
            src="https://i.stack.imgur.com/l60Hf.png"
            alt=""
          />
        
        </div>
      </div>
      <div className="col-md-6">
        <div className="profile-head">
          <h5>{userData.name}</h5>
          <h6>{userData.work}</h6>
          <p className="proile-rating">
            RANKINGS : <span>8/10</span>
          </p>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Timeline
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-2">
        <input
          type="button"
          className="profile-edit-btn"
          name="btnAddMore"
          defaultValue="Edit Profile"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="profile-work">
          
          <p>SKILLS</p>
          <a href="ad">Web Designer</a>
          <br />
          <a href="asd">Web Developer</a>
          <br />
          <a href="ads">WordPress</a>
          <br />
          <a href="ad">WooCommerce</a>
          <br />
          <a href="asd">PHP, .Net</a>
          <br />
        </div>
      </div>
      <div className="col-md-8">
        <div className="tab-content profile-tab" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="row">
              <div className="col-md-6">
                <label>User Id</label>
              </div>
              <div className="col-md-6">
                <p> {userData._id}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Name</label>
              </div>
              <div className="col-md-6">
                <p>{userData.name}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Email</label>
              </div>
              <div className="col-md-6">
                <p>{userData.email}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Phone</label>
              </div>
              <div className="col-md-6">
                <p>{userData.phone}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Profession</label>
              </div>
              <div className="col-md-6">
                <p>{userData.work}</p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="row">
              <div className="col-md-6">
                <label>Experience</label>
              </div>
              <div className="col-md-6">
                <p>Expert</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Hourly Rate</label>
              </div>
              <div className="col-md-6">
                <p>10$/hr</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Total Projects</label>
              </div>
              <div className="col-md-6">
                <p>230</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>English Level</label>
              </div>
              <div className="col-md-6">
                <p>Expert</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Availability</label>
              </div>
              <div className="col-md-6">
                <p>6 months</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label>Your Bio</label>
                <br />
                <p>Your detail description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

  </>
  )
}

export default About