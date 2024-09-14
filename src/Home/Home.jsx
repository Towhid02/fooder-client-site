import ExploreMenu from "../Components/Menu/ExploreMenu";
import Hero from "./Hero/Hero";
import Slider from "./Slider/Slider";



const Home = () => {
    return (
        <div>
            <Hero/>  
            <ExploreMenu/>
            <Slider/>     
        </div>
    );
};

export default Home;