import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/Router';
import StoreContextProvider from './Context/storeContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
    <div className='max-w-screen-3xl  mx-auto text-center bg-white text-black'>
      <RouterProvider router={router} />
    </div>
    </StoreContextProvider>
    
  </React.StrictMode>,
)
