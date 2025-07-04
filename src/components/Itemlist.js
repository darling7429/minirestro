import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";
import {additem,removeitem,clearcart} from "../redux/cart/Cartslice";
import { useDispatch} from "react-redux";

const Itemlist = (props) => {
  
  const [task, settask] = useState(false);

 // console.log(props);
  const { name, price, description, imageId, defaultPrice } =
    props.data.card.info;
    //console.log(props.data.card.info)
  const { rating } = props.data.card.info.ratings?.aggregatedRating;

  //console.log(props.data.card.info.name);
  const dispatch=useDispatch()
  const add_cart=(item)=>{
    //console.log(item)
    dispatch(additem(item))

  
    // console.log( props.data.card.info)
  }
  
  const viewcart = () => {
    alert(`cart has ${count} items 
    `);
  };
  return (
    <>
      <div className="item_list">
        <div className="item_desc">
          <p>{name}</p>
          <p>&#8377;{price / 100}</p>
          <p>
            {props.data.card.info.ratings?.aggregatedRating.rating
              ? props.data.card.info.ratings?.aggregatedRating.rating
              : ""}
          </p>
          <p>
            {description ? description.slice(0, 100) : ""}...<span></span>
          </p>
        </div>
        <div className="item_image">
          {
            <button
              className="image_button"
              onClick={() => {
                
                add_cart( props.data.card.info)
              }}>
              ADD
            </button>
          }

          {imageId ? (
            <img src={CDN_URL + imageId} />
          ) : (
            <img src="https://www.google.com/search?sca_esv=6b19787a6a994d6b&rlz=1C1PNBB_enIN1040IN1040&sxsrf=AE3TifPof2fvqobqzjTZaKU7ml7urAvb-w:1750271259334&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeoJTKjrFjVxydQWqI2NcOha3O1YqG67F0QIhAOFN_ob1yXos5K_Qo9Tq-0cVPzex8akBC0YDCZ6Kdb3tXvKc6REgf3vAxmWjii6Zu8D3ukBgEZt85bCNn6rBG2av3G6E0v91S9jMn9vVYvV5PbYPAsdPCdfG5GnDwNbDQn1miZTogqAXbQ&q=image+not+loaded+pic&sa=X&ved=2ahUKEwiKhLHFzPuNAxUUHNAFHbF9KIgQtKgLegQIFBAB&biw=1536&bih=730&dpr=1.25" />
          )}
        </div>
      </div>
      <hr></hr>
      {task ? (
        <div className="taskbar">
          <p>{count} item added</p>
          <p
            className="cart"
            onClick={() => {
              viewcart();
            }}>
            view cart
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Itemlist;
