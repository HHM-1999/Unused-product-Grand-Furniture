import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Home/Blog/Blog";
import Products from "../../Pages/Home/Categories/Products/Products";
import AddProduct from "../../Pages/Home/Dashboard/AddProduct";
import Admin from "../../Pages/Home/Dashboard/Admin";
import AllBuyer from "../../Pages/Home/Dashboard/AllBuyer";
import AllSeller from "../../Pages/Home/Dashboard/AllSeller";
import Dashboard from "../../Pages/Home/Dashboard/Dashboard";
import MyBuyer from "../../Pages/Home/Dashboard/MyBuyer";
import MyOrders from "../../Pages/Home/Dashboard/MyOrders";
import MyProduct from "../../Pages/Home/Dashboard/MyProduct";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/Home/SignUp/SignUp";
import Login from "../../Pages/Login/Login";

import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },

            {
                path: '/home',
                element: <Home></Home>

            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>

            },
            {
                path: "/products/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <div className="flex flex-wrap">
                    <div className='text-center p-12 mt-6'>
                        <h1 className="text-2xl text-black font-bold">404</h1>
                        <h2 className="text-2xl text-black font-bold" >Oops!!! You're Lost 😥</h2>
                        <p className="text-2xl text-error font-bold">The Page you are looking for was not found..................</p>

                    </div>
                    <div>
                        <img className="mx-9 mt-4" src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=sph" alt="404 error" />
                    </div>
                </div>
            },

        ]
    }
    , {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProduct',
                element: <MyProduct></MyProduct>

            },
            {
                path: '/dashboard/myBuyer',
                element: <MyBuyer></MyBuyer>
            },
            {
                path: "/dashboard/allBuyer",
                element: <AllBuyer></AllBuyer>
            },
            {
                path: "/dashboard/allSeller",
                element: <AllSeller></AllSeller>
            },
            {
                path: "/dashboard/admin",
                element: <Admin></Admin>
            }
        ]
    }
])

export default router;