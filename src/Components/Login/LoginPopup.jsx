import { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState]= useState("Sign Up")
    return (
        <div className='login-popup'>
          <form className='login-popup-container bg-rose-100 border-2'>
            <div className='login-popup-title font-itim uppercase' >
                <h2>
                {currState}
                </h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-input flex flex-col  space-y-3'>
                {currState==="login"?<></>:<input className='input bg-transparent border-black focus:border-red-900  focus:outline-hidden' type="text" placeholder='Your Name' required />}
          <input className='input bg-transparent border-black focus:border-red-900  focus:outline-hidden' type="email" placeholder='Your Email' required />
          <input className='input bg-transparent border-black focus:border-red-900  focus:outline-hidden' type="password" placeholder='Password' required />
            </div>
            <button className='btn'>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type="checkbox" required />
                <p className='text-sm font-moli'>By continuing, I agree  to the terms of use & privacy policy</p>
            </div>
            {
              currState=== "login"?
              <p className='text-sm font-moli'>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
            <p className='text-sm font-moli'>Already have an account? <span onClick={()=>setCurrState("login")}>Login here</span></p>
            }
            
          </form>
        </div>
    );
};

export default LoginPopup;