import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className='shadow-2xl mt-5 mx-9  '>
            <div className="navbar bg-base-100 bg-primary text-white ">
                <div className="navbar-start">
                    <Link className=" normal-case text-xl ml-2 mx-9"> 🛌 Grand Furniture</Link>
                </div>
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/products'>Products</Link></li>

                        <li><Link to="/blog">Blog</Link></li>

                        <li> <Link className="btn btn-primary text-white" to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link className="btn btn-primary text-white" to='/signup'>Sign Up</Link>
                        </li>
                        <li>  <Link className="btn btn-primary text-white" to='/logout'>LogOut</Link></li>
                    </ul>
                </div>
                {/* <div className="navbar-end  gap-4">


                        {
                            user?.uid ? <>

                                <Link className="btn" to='/logout'>LogOut</Link>

                            </>
                                :
                                <>
                                   


                                </>
                        }

                    </div> */}
            </div>
        </div>

    );
};

export default Header;