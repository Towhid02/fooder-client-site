/* eslint-disable react/jsx-key */
import { useContext } from "react";
import "./Chart.css";
import { StoreContext } from "../../Context/storeContext";
import { useNavigate } from "react-router-dom";

const Chart = () => {
  const { cartItems, food_list, removeFromChart,  getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <div className="cart">
    <div className="cart-items">
        <div className="cart-items-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>        
      </div>
      <br />
      <hr className=" border-y-red-300" />
      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div>
            <div className="cart-items-title cart-item-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price*cartItems[item._id]}</p>
              <p>x</p>              
            </div>
              <hr className=" border-y-red-300" />
            </div>
          );
        }
      })}
    </div>
    <div className="cart-bottom ">
      <div className="cart-total">
        <h2>Cart Total</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fees</p>
            <p>${2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
          <p>Total</p>
          <p>${getTotalCartAmount()+2}</p>
          </div>
        </div>
        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
      </div>
      <div className="cart-promocode">
        <div>
          <p className=" text-gray-500">If you have any promocode, Enter it here</p>
          <div className="cart-promocode-input">
            <input  type="text" placeholder="Promo Code" /> 
            <button >Submit</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Chart;
