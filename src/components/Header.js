import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
export{Header} 
export default Header;