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

                        <li tabIndex={0}>
                            <Link className="btn btn-primary text-white" to='/signup'>
                                Sign Up
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-base-100">
                                <li><Link className='text-black'>Seller</Link></li>
                                <li><Link className='text-black'>Buyer</Link></li>
                            </ul>
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