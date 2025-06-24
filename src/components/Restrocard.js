import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Restrocard = (props) => {
  const { resobj } = props;


  const { name, avgRating, id, costForTwo, cloudinaryImageId, cuisines } =resobj?.card?.card?.info;

  return (
    <div className="res-card" key={id}>
      <div className="res_inner">
        <div className="res_img">
          <img src={CDN_URL + cloudinaryImageId} />
        </div>

        <div className="res-description">
          <div className="res-head">
            <h3>{name}</h3>
            <div className="rating_logo">
              {avgRating} <i className="fa-solid fa-star"> </i>
            </div>
          </div>

          <div className="cost">
            <h3>{cuisines.join(" , ")}</h3>
            <h2 className="timings"> {costForTwo} </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export const   Withpromoted=(Data)=>{
  return (props)=>{
    return(
      
      <div>
        <label className="promoted">promoted</label>
        <Data {...props}/>
      </div>
      
    )
  }

}

export default Restrocard;
