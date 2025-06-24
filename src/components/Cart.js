import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearcart, decrement, increment, removeitem } from "../redux/cart/Cartslice";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartitems = useSelector((store) => {
    return store.cart.items;
  });
  const dispatch = useDispatch();

  const clear_cart = () => {
    dispatch(clearcart());
  };
  const remove=(item)=>{
    dispatch(removeitem(item))

  }

  const increase = (item) => {
    //console.log(item)
    dispatch(increment(item));
  };
  const decrease = (item) => {
    //console.log(item)
    dispatch(decrement(item));
  };
  return (
    <>
      {cartitems.length == 0 ? (
        <h1>cart is empty add items 🌐</h1>
      ) : (
        <div className="cart_div">
          {cartitems.map((item) => {
            const { name, price, id, description, imageId, quantity } = item;
            return (
              <div className="cart_item" key={id}>
                <p>{name}</p>
                <p> &#x20B9;{price / 100}</p>
                <img src={CDN_URL + imageId} />
                <p>
                  <button
                    onClick={() => {
                      decrease(item);
                    }}>
                    -
                  </button>
                  {quantity}
                  <button
                    onClick={() => {
                      increase(item);
                    }}>
                    +
                  </button>
                </p>
                <p>
                 
                </p>
                <button
                  onClick={() => {
                    remove(item);
                  }}>
                  Remove item
                </button>
              </div>
            );
          })}
          <div>
            <button
              onClick={() => {
                clear_cart();
              }}>
              clear cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
