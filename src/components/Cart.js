import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearcart,
  decrement,
  increment,
  removeitem,
} from "../redux/cart/Cartslice";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Modal from "./Modal";

const Cart = () => {
  const cartitems = useSelector((store) => {
    return store.cart.items;
  });
  const dispatch = useDispatch();

  const clear_cart = () => {
    dispatch(clearcart());
  };
  const remove = (item) => {
    dispatch(removeitem(item));
  };
  const [loading, setloading] = useState(false);
  const [open, setopen] = useState(false);

  const increase = (item) => {
    //console.log(item)
    dispatch(increment(item));
  };
  const decrease = (item) => {
    //console.log(item)
    dispatch(decrement(item));
  };
  const cart_total = cartitems.reduce((acc, item) => {
    const{defaultPrice}=item
    return acc + (item.price?item.price:defaultPrice)* item.quantity;
  },0);
  console.log(cart_total)
  return (
    <>
      {cartitems.length == 0 ? (
        <div className="empty">
          <div>
            <h2>cart is empty add items 🌐</h2>
          </div>
          <Link to="/">continue chopping</Link>
        </div>
      ) : (
        <>
          <h2 className="cart_header">
            Cart Items Check-out : {cartitems.length + " items"}
          </h2>
          <hr></hr>

          <div className="cart_div">
            <div className="cart_">
              <p>Image</p>
              <p>Item-Name</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Item-total</p>
              <p>
                <i class="fas fa-trash"></i>
              </p>
            </div>
            <hr></hr>

            {cartitems.map((item) => {
              const {
                name,
                price,
                defaultPrice,
                id,
                description,
                imageId,
                quantity,
              } = item;
              return (
                <div className="cart_item" key={id}>
                  <div className="item_detail">
                    <div className="item_img">
                      <img src={CDN_URL + imageId} />
                      <p>{name}</p>
                    </div>
                    {/* <span><p>{name}</p></span> */}
                  </div>
                  <div>
                    &#8377;
                    {(price?price:defaultPrice) / 100}
                  </div>

                  <div>
                    <p>
                      <i
                        className="fa-solid fa-minus"
                        onClick={() => {
                          decrease(item);
                          //setloading(false)
                        }}></i>

                      {loading ? <Spinner /> : quantity}
                      <i
                        className="fa-solid fa-plus"
                        onClick={() => {
                          increase(item);
                          //setloading(false)
                        }}></i>
                    </p>
                  </div>
                  <div>&#8377;{(quantity * (price?price:defaultPrice) / 100)}</div>
                  <div>
                    <i
                      className="fa fa-times"
                      onClick={() => {
                        remove(item);
                      }}></i>
                  </div>
                </div>
              );
            })}

            <div>
              <h2> Cart_Total: &#8377;{cart_total / 100}</h2>
            </div>

            <div className="cart_buttons">
              <button
                className="clear_button"
                onClick={() => {
                  clear_cart();
                }}>
                CLEAR CART
              </button>
              <button
                className="clear_button"
                onClick={() => {
                  setopen(true);
                }}>
                PLACE ORDER
              </button>
            </div>
          </div>
        </>
      )}
      {open ? (
        <Modal
          setmodal={() => {
            setopen(false);
          }}
        />
      ) : null}
    </>
  );
};

export default Cart;
