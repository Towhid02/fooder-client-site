import { useState } from "react";
import ExploreMenu from "../Components/Menu/ExploreMenu";
import Hero from "../Pages/Hero/Hero";

import Slider from "./Slider/Slider";
import FoodDisplay from "../Components/FoodDisplay/FoodDisplay";



const Home = () => {
 
    const [category, setCategory] = useState("All")
    return (
        <div>
            <Hero/>  
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category} setCategory={setCategory}></FoodDisplay>
            {/* <Slider/>      */}
        </div>
    );
};

export default Home;