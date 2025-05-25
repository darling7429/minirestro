import Restrocard from "./Restrocard";
import resobj from "../utils/mockdata";
import { SIDE_IMG1 } from "../utils/constants"
import { SIDE_IMG2 } from "../utils/constants";


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
        <img
          className="side_img1"
          src={SIDE_IMG1}
        />
        <img
          className="side_img2"
          src={SIDE_IMG2}
        />
      </div>

      <div className="restaurants">
        <Restrocard resobj={resobj} />
      </div>
    </div>
  );
};

export default Body