
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Layout/Root";
import PlaceOrder from "../Pages/Order/PlaceOrder";
import Chart from "../Pages/Chart/Chart";


const router = createBrowserRouter([
    {
        path: "/",
      element:<Root></Root>,
      children: [
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "/chart",
          element:<Chart/>
        },
        {
          path: "/order",
          element:<PlaceOrder/>
        }
      ]
    }
])

export default router;