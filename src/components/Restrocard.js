
import { CDN_URL } from "../utils/constants";
const Restrocard = (props) => {
  const { resobj } = props;

  // const { name, cloudinaryImageId, avgRating, cuisines, costForTwo } =  resobj?.card?.card?.info;
  return (resobj.map((data) => {
    const { name, avgRating,id, costForTwo, cloudinaryImageId, cuisines } =
      data?.card?.card?.info;
    return (
      <div className="res-card">
        <div className="res_img">
          <img 
            src={CDN_URL
               +
              cloudinaryImageId
            }
          />
        </div>

        <div className="res-description">
          <div className="res-head">
            <h3 >{name}</h3>
            <div className="rating_logo">
              {avgRating} <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <div>
            <h3 >{cuisines.join(" , ")}</h3>
            <h2 className="timings" > &#8377; {costForTwo / 100} for two </h2>
          </div>
        </div>
      </div>
    );
  }));
};

export default Restrocard;