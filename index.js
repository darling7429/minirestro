import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="reslogo"
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          alt="res-logo"
        />
      </div>
      <div className="nav_items">
        <ul>
          <li>Swiggy corporate</li>
          <li>Partner with Us</li>

          <button className="nav_button1">
            Get The App <i className="fa-solid fa-square-arrow-up-right"></i>
          </button>
          <button className="nav_button2">Sign in</button>
        </ul>
      </div>
    </div>
  );
};

const Restrocard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <div className="res_img">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/herq2apqf9n2piqbuuk0" />
      </div>

      <div className="res-description">
        <div className="res-head">
          <h3>{props.resname}</h3>
          <div className="rating_logo">
            {props.rating} <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <p>40-45 mins </p>
        <div>
          <p>American,continental,italian</p>
          <p className="timings">opens at 12 noon </p>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search_bar">
        <h1>
          Order food & groceries. Discover
          <br />
          best restaurants. Swiggy it!
        </h1>
        <input
          type="text"
          className="search"
          placeholder="search for restaurant item or more "
        />
        <button type="submit">
          <img
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
            alt="Search"
          />
        </button>
        
      </div>
      <div className="side_img">
        
        <img className="side_img1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" />
        <img className="side_img2" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" />
      </div>
      
      <div className="restaurants">
        <Restrocard resname="paradise" rating="4.8" />
        <Restrocard resname="shadab" rating="4.5" />
        <Restrocard resname="shadab" rating="4.5" />
          <Restrocard resname="shadab" rating="4.5" />
            <Restrocard resname="shadab" rating="4.5" />
              <Restrocard resname="shadab" rating="4.5" />
         
        
      </div>
    </div>
  );
};

const Footer = () => {
  return <div></div>;
};

const App = () => {
  return (
    <>
    <div className="app_wrapper">
<Header />
      <Body />
      <Footer />
    </div>
      
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
