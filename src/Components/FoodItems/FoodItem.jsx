/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { assets } from '../../assets/assets';
import './FoodItem.css'
import { StoreContext } from '../../Context/storeContext';

const FoodItem = ({id, name, price, description, image }) => {
    const {cartItems, addToCart, removeFromCart, setCartItems}=useContext(StoreContext)

    return (
        <div id='food-item' className='bg-gray-300 p- rounded-xl bg-transparent'>
            <div id="food-item-image-container">
                <img className=' rounded-xl' src={image} alt="" />
                {  !cartItems[id] 
                    ?<img id='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt=''/>
                    : <div id='food-item-counter' className=''>
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p className='font-itim font-semibold'>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div id="info" className='m-5'>
            <div id='item-name-rating' className='flex justify-between items-center'>
                <p className='font-galada  text-xl  text-orange-600'>{name}</p>
                <img className=' h-4' src={assets.rating_starts} alt="" />
               
            </div>
            <p id="item-des" className='text-left font-itim'>
                {description}
            </p>
            <p id="item-price" className='text-left  text-xl  font-grand font-bold'>
                    Price = ${price}
                </p>
            
            </div>
        </div>
    );
};

export default FoodItem;