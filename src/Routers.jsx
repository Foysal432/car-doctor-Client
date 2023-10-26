import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import CheckOut from "./Pages/CheckOut";
import Bookings from "./Pages/Bookings/Bookings";
import PrivateRoute from "../PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[{
        path:'/',
       element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'checkout/:id',
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
        element:<CheckOut></CheckOut>
      },
      {
        path:'bookings',
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
      }
    
    ]
    },
  ]);
  export default router