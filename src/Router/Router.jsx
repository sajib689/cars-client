import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Cars from "../Components/Cars/Cars";
import CarLayout from "../Components/CarLayout/CarLayout";
import Details from "../Components/Details/Details";
import CheckOut from "../Components/CheckOut/CheckOut";
import MyOrders from "../Components/MyOrders/MyOrders";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


const router =createBrowserRouter([
    
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:3000/cars/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:3000/cars/${params.id}`)
            },
            {
                path: '/orders',
                element: <MyOrders></MyOrders>
            },
            
        ]
    },
    {
        path: '/',
        element: <CarLayout></CarLayout>,
        children: [
            {
                path: '/cars',
                element: <Cars></Cars>,
                
            },
           
            
        ]
    },
  
])
export default router