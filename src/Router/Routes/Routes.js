import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Home/Blog/Blog";
import Dashboard from "../../Pages/Home/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";


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
                path: '/blog',
                element: <Blog></Blog>

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
])

export default router;