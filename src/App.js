import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom/client";
import Header,{Header as Myheader} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <div className="app_wrapper">
        <Myheader />
        <Body />
        <Footer />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
