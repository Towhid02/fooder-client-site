/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import "./navbar.css"
import { Menu } from 'lucide-react';
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/storeContext";


const Navbar = ({setShowLogin}) => {

  // const [menu, setMenu] = useState()
  const [header, setHeader] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const {getTotalCartAmount} = useContext(StoreContext)

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    //remove event
    return () => window.removeEventListener('scroll', scrollYPos)
  })

  return (
    <header className={`  relative mx-auto top-0 z-30 bg-orange-100 border-2 border-orange-200 transition-all ${header ? 'py-4 bg-orange-100 shadow-lg ' : 'py-6'} `}>
      <div className="max-w-7xl mx-auto ">
        {/* MobileNav */}
        <div className='flex md:hidden justify-between px-4'>
          <div href="/" className="text-primary  flex gap-1 items-center">
            <img src="/public/assets/chili-pepper.png" width={30} height={30} alt='chilli' />
            <h1 className='text-red-500 font-bold text-xl '>
              Spicy
              <span className="text-gray-800 font-semibold z-20 hover:scale-110">Fooder</span>
            </h1>
          </div>
          <div className='flex gap-8'>
            
            <button className='' onClick={() => setMobileNavOpen(prev => !prev)}>
              <Menu className='' />
            </button>
          </div>
        </div>
        {mobileNavOpen && (
        <ul 
        onClick={()=> setMobileNavOpen(false)}
        className='md:hidden p-4  bg-orange-100 rounded-lg font-semibold text-xl mt-2 flex flex-col gap-2 text-center'>
          <Link to={'/'}>Home</Link>
          <Link to={'/menu'}>Menu</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/cart'}>Cart</Link>
         
        </ul>

        )}

        {/* computerNav */}
        <div className='hidden md:flex justify-between items-center px-10 '>
          <div href="/" className="text-primary font-semibold flex gap-1 items-center hover:text-orange-400 hover:scale-110">
            <img src="/public/assets/chili-pepper.png" className='w-10'/>
            <div className='text-red-500  font-bold p-2 btn btn-ghost text-5xl  font-galada'>
              Fooder
             
            </div>
          </div>
          <div className='flex items-center gap-x-6'>
            {/* nav */}
            <ul className="flex items-center cursor-pointer gap-8 text-black font-semibold">
              <Link className='hover:text-red-500 transition-all font-itim' to={'/'}>Home</Link>
              <Link className='hover:text-red-500 transition-all font-itim' to={'/menu'}>Menu</Link>
              <Link className='hover:text-red-500 transition-all font-itim' to={'/about'}>About</Link>
              <Link className='hover:text-red-500 transition-all font-itim'  to={'/cart'}>Cart</Link><div className={getTotalCartAmount()===0?"":"dot"}></div>
              <button onClick={()=>setShowLogin(true)} className='bg-red-500 px-4 py-2 text-white rounded-lg font-itim'>Login</button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;