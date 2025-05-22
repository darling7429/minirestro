import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
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


const Restrocard=()=>{
  return(
    <div className="res-card">
      

      
    </div>
  )
}

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
          placeholder="   search for restaurant item or more "
        />
        <button type="submit">
          <img
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
            alt="Search"
          />
        </button>
      </div>
      <div className="restaurants">
        <Restrocard/>


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
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
