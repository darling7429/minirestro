import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearcart } from "../redux/cart/Cartslice";

const Modal = ({ setmodal }) => {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.cart.items);

  const total = data.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return data.length > 0 ? (
    <div className="modal_overlay">
      <div className="modal">
        <div className="modal_header">
          <div>
            <h2>Order placed successfully </h2>
          </div>
          <div>
            <img
              className="gif"
              src="https://assets-v2.lottiefiles.com/a/45a131e0-1179-11ee-bbe2-2b1378a6aea4/znMpLKVhYd.png"
              alt="Congratulations"
            />
          </div>

          <button
            onClick={() => {
              setmodal();
              dispatch(clearcart());
            }}>
            Close x
          </button>
        </div>
        <hr></hr>
        <div className="modal_body">
          <div className="modal_item">
            <p>Tax:</p>
            <p>
              &#8377;
              {((total * 0.07) / 100).toFixed(2)}
            </p>
          </div>
          <hr></hr>

          <div>
            {data.map((item) => (
              <div key={item.name}>
                <div className="modal_data">
                  <div>
                    <p>{item.name}</p>
                    <p>Quantity : x{item.quantity}</p>
                    <p>
                      price : &#8377; {item.price ? item.price / 100 : "N/A"}
                    </p>
                    <p>
                      Total_Item_Price : &#8377;{" "}
                      {(item.quantity * item.price) / 100}
                    </p>
                  </div>
                  <div className="modal_image">
                    <img src={CDN_URL + item.imageId} />
                  </div>
                </div>
                <hr></hr>
              </div>
            ))}
          </div>

          <hr></hr>
        </div>
        <h3>
          Total Payable: &#8377;
         <b>{((total * 1.07) / 100).toFixed(2)}</b> 
        </h3>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
