import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useNetwork from "../utils/useNetwork";
import usercontext from "../utils/Usercontext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggeduser } = useContext(usercontext);
  const [login, setlogin] = useState(false);
  function handlelogin() {
    setlogin(!login);
  }

  const online = useNetwork();

  const cart = useSelector((store) => {
    return store.cart.items;
  });
  //console.log(cart)

  useEffect(() => {
    //fetchdata();
  }, [login]);

  return (
    <div className="header">
      <div className="logo">
        <img className="reslogo" src={LOGO_URL} alt="res-logo" />
      </div>
      <div className="nav_items">
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link className="link">About Swiggy</Link>
          </li>
          <li>
            <Link className="link" to="/cart">
              <i className="fas fa-shopping-cart">{cart.length}</i>
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              user: {loggeduser}
            </Link>
          </li>

          <button className="nav_button2" onClick={handlelogin}>
            {login ? "Sign-out" : "Sign-in"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
