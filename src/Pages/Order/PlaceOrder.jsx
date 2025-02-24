import "./PlaceOrder.css"
import { useContext } from "react";
import { StoreContext } from "../../Context/storeContext";


const PlaceOrder = () => {

    const {getTotalCartAmount} = useContext(StoreContext)
    return (
        <form className="place-order px-16">
            <div className="place-order-left w-full max-w-lg">
                <p className="text-[tomato] text-2xl font-grand font-bold mb-12 text-start"> Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First name"/>
                    <input type="text" placeholder="Last name"/>
                </div>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Address" />
                    <div className="multi-fields">
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="State" />
                    </div>
                    <div className="multi-fields">
                        <input type="text" placeholder="Zip Code" />
                        <input type="text" placeholder="Country" />
                    </div>
                    <input type="text" placeholder="Phone Number" />
                    
            </div>
            <div className="place-order-right">
            <div className="cart-total">
        <h2 className=" text-[tomato] text-2xl font-grand font-semibold mb-12 text-start"> Total payment </h2>
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
        <button className=" mt-8">PROCEED TO PAYMENT</button>
      </div>
            </div>
        </form>
    );
};

export default PlaceOrder;