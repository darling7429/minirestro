import Restrocard from "./Restrocard";
import resobj from "../utils/mockdata";
import { SIDE_IMG1 } from "../utils/constants";
import { SIDE_IMG2 } from "../utils/constants";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Body = () => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [onload, setonload] = useState([]);
  const [loading, isloading] = useState(false);

  function filterdata() {
    isloading(true);
    setTimeout(() => {
      let data2 = data.filter((data) => {
        return data?.card?.card?.info?.avgRating > 4.3;
      });
      setonload(data2);
      isloading(false);
    }, 1000);
  }

  function handlechange(e) {
    setsearch(e.target.value);

    const search_res = data.filter((data) => {
      return data.card.card.info.name
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
    });

    setonload(search_res);
  }
  const fetchdata = async () => {
    try {
      isloading(true);
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      const json = await data.json();

      setdata(json?.data?.cards?.slice(3));

      setonload(json?.data?.cards?.slice(3));
      isloading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
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

        <div  className="restaurants">
          {onload.map((data) => {
           return  <Link  key={data?.card?.card?.info.id}  to={"/restaurant/"+data?.card?.card?.info.id}><Restrocard resobj={data}  /></Link>;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Body;
