import Restrocard from "./Restrocard";
import resobj from "../utils/mockdata";
import { SIDE_IMG1 } from "../utils/constants";
import { SIDE_IMG2 } from "../utils/constants";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const Body = () => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");

  function filterdata() {
  
    let data2 = data.filter((data) => {
      
      return data?.card?.card?.info?.avgRating > 4.3;
    });
    setdata(data2);
  }
  
  function handlechange(e) {
    setsearch(e.target.value);
   
  }
  const fetchdata = async() => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json=await data.json();

    setdata(json?.data?.cards?.slice(3))
    
    

  };

  useEffect(() => {
    fetchdata();
  }, []);

  
  return data.length===0?<Spinner/>: (
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
          value={search}
          onChange={handlechange}
        />
        <button className="search_button" type="submit">
          <img
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
            alt="Search"
          />
        </button>
        <button className="Toprestro" onClick={filterdata}>
          Top restaurants
        </button>
      </div>

      <div className="side_img">
        <img className="side_img1" src={SIDE_IMG1} />
        <img className="side_img2" src={SIDE_IMG2} />
      </div>

      <div className="restaurants">
        <Restrocard resobj={data} />
      </div>
    </div>
  );
};

export default Body;
