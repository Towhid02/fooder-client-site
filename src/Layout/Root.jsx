


import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useState } from 'react';
import LoginPopup from '../Components/Login/LoginPopup';




const Root = () => {
    const [showLogin, setShowLogin] = useState(false)
   
    return (
        <>
        {showLogin?<LoginPopup setShowLogin={setShowLogin}></LoginPopup>:<></>}
        <div>
       <Navbar setShowLogin={setShowLogin}></Navbar>
        <Outlet></Outlet>
        
        <Footer/>
   </div>
   </>
    );
};

export default Root;