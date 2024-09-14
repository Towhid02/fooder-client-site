


import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const Root = () => {
   
    return (
        <div>
       <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer/>
   </div>
    );
};

export default Root;