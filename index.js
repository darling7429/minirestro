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



const resobj={
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                      "info": {
                        "id": "619503",
                        "name": "Litti Heist",
                        "city": "1",
                        "slugs": {
                          "restaurant": "litti-heist-hsr-hsr",
                          "city": "bangalore"
                        },
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/a865716c-92ea-46f0-8826-01328aa48c64_619503.jpg",
                        "address": "No 151/17, Shiradi Sai Nilaya, 3rd Main Road,  Jakkasandra, Karnataka-560034",
                        "locality": "1st Block",
                        "areaName": "Koramangala",
                        "costForTwo": "20000",
                        "costForTwoMessage": "₹200 FOR TWO",
                        "cuisines": [
                          "North Indian",
                          "Bihari"
                        ],
                        "avgRating": 4.3,
                        "feeDetails": {
                          
                        },
                        "avgRatingString": "4.3",
                        "totalRatingsString": "13K+",
                        "adTrackingId": "cid=28659251~p=1~adgrpid=28659251#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=619503~plpr=SEARCH#RESTAURANT~st=north indian~eid=fa9e9927-dd7e-4a47-8193-acc79c45bb70~srvts=1747966525254",
                        "sla": {
                          "deliveryTime": 30,
                          "minDeliveryTime": 30,
                          "maxDeliveryTime": 35,
                          "lastMileTravel": 2.8,
                          "serviceability": "SERVICEABLE",
                          "rainMode": "RAIN_MODE_NONE",
                          "slaString": "30-35 MINS",
                          "lastMileTravelString": "2.8 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "opened": true,
                          "restaurantClosedMeta": {
                            
                          }
                        },
                        "badges": {
                          
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "50% OFF",
                          "discountTag": "FLAT DEAL",
                          "discountCalloutInfo": {
                            "message": "Free Delivery",
                            "logoCtx": {
                              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                            }
                          }
                        },
                        "ratingSlab": "RATING_SLAB_5",
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          },
                          "commsStyling": {
                            
                          }
                        },
                        "cartOrderabilityNudgeBanner": {
                          "parameters": {
                            
                          },
                          "presentation": {
                            
                          }
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "featuredSectionInfo": {
                          "featured": true,
                          "sectionTitle": "Featured"
                        },
                        "campaignId": "28659251"
                      },
                      "analytics": {
                        "screenName": "explore",
                        "context": "{\"tid\":\"d8589e51-000b-f0ad-6b6b-665d48540101\",\"grid\":\"ab4645b2-d911-4b41-9bfb-71de0aa17a34\",\"queryUniqueId\":\"445f9550-caa9-053d-1b7f-46169ce4d3fa\",\"query\":\"North Indian\",\"adTrackingId\":\"cid=28659251~p=1~adgrpid=28659251#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=619503~plpr=SEARCH#RESTAURANT~st=north indian~eid=fa9e9927-dd7e-4a47-8193-acc79c45bb70~srvts=1747966525254\"}",
                        "objectValue": "619503",
                        "impressionObjectName": "impression-restaurant-ad",
                        "clickObjectName": "click-restaurant-ad"
                      },
                      "ctaWithParams": {
                        "link": "swiggy://menu",
                        "type": "DEEPLINK",
                        "params": {
                          "query": "North Indian",
                          "sourceSessionId": "kqua414a-8969-441a-9e96-1086eeeef9f0",
                          "source": "SEARCH",
                          "isSld": "false",
                          "sourceRequestId": "47fd3145cea6b3919ccbd347a0748a62",
                          "qrEnabled": "false",
                          "restaurant_id": "619503"
                        }
                      }
                    }
                  

const Restrocard = (props) => {
  const{resobj}=props;
  
  console.log()
  return (
    <div className="res-card">
      <div className="res_img">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/herq2apqf9n2piqbuuk0" />
      </div>

      <div className="res-description">
        <div className="res-head">
          <h3>{resobj.info.name}</h3>
          <div className="rating_logo">
            {resobj.info.avgRating} <i className="fa-solid fa-star"></i>
          </div>
        </div>
        
        <div>
          <h3>{resobj.info.cuisines.join(" , ")}</h3>
          <h2 className="timings"> &#8377; {(resobj.info.costForTwo/100) }  for two </h2>
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
        <Restrocard resobj={resobj} />
       
       
         
        
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
