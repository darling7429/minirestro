import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const[login,setlogin]=useState(false)
  function handlelogin(){
    setlogin(!login)
  }

  

  useEffect(() => {
      //fetchdata();
  
    },[login]);
  
  return (
    <div className="header">
      <div className="logo">
        <img
          className="reslogo"
          src={LOGO_URL}
          alt="res-logo"
        />
      </div>
      <div className="nav_items">
        <ul>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About Swiggy</Link></li>
          <li> <Link to="/contact" className="link">Contact with Us</Link></li>

          <button className="nav_button1">
            Get The App <i className="fa-solid fa-square-arrow-up-right"></i>
          </button>
          <button className="nav_button2" onClick={handlelogin}>{login?"Sign-out":"Sign-in"}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;