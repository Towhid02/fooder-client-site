

import { useContext } from 'react';
import './FoodDisplay.css'
import { StoreContext } from '../../Context/storeContext';
import FoodItem from '../FoodItems/FoodItem';


const FoodDisplay = ( {category, setCategory} ) => {

    const {food_list} = useContext(StoreContext)

    return (
        <div id='food-display' className=' my-8 px-10'>
            <h2 className=' text-3xl  font-bold font-galada'>Top Dishes Near You</h2> 
            <div id="food-display-list" className=' grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-8 gap-12 '>
                {
                    food_list.map((item, index) => {
                        return <FoodItem key={index} id={item._id}  name={item.name} description={item.description} image={item.image} price={item.price}/>
                    })
                }
            </div>
            
        </div>
    );
};

export default FoodDisplay;