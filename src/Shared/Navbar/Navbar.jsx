import { useState } from "react";
import "./navbar.css"


const Navbar = () => {
  const [menu, setMenu] = useState()
  return (
    <div className="navbar p-5 bg-orange-100">
      <div className="navbar-start">
    <a id="logo" className="p-2 btn btn-ghost text-5xl  font-galada">Fooder</a>
  </div>
  <div className=" navbar-center">
    <div >
      
      <ul
        id="nav"
        className="men flex gap-10 cursor-pointer text-orange-600 ">
        <li ><a onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</a></li>
        <li ><a onClick={()=>setMenu("About")} className={menu==="About"?"active":""}>About</a></li>
        <li ><a onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>Contact</a></li>
      </ul>
    </div>
  </div>
  
  <div className="navbar-end gap-3">
    <button className="btn btn-ghost btn-circle text-orange-600 outline">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 relative rounded-sm"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    <button className="btn btn-ghost  text-orange-600 outline ">
      Sign in
    </button>
  </div>
</div>
  );
};

export default Navbar;