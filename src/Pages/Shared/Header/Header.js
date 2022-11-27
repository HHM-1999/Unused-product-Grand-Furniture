import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logout Successful");
            })
            .catch(error => console.error(error))
    }
    return (

        <div className='shadow-2xl mt-5 mx-9  '>
            <div className="navbar bg-base-100 bg-primary text-white ">
                <div className="navbar-start">
                    <Link className=" normal-case text-xl ml-2 mx-9"> 🛌 Grand Furniture</Link>
                </div>
                <div className="navbar-center hidden lg:flex hidden:dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>

                    <ul className="menu menu-horizontal p-0 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to="/blog">Blog</Link></li>

                    </ul>
                </div>
                <div className="navbar-end  gap-4">


                    {
                        user?.uid ? <>

                            {/* <Link className="btn" to='/logout'>LogOut</Link> */}

                            <li><button className="btn btn-primary text-white" onClick={handleLogout}>LogOut</button></li>

                        </>
                            :
                            <>

                                <li> <Link className="btn btn-primary text-white" to='/login'>Login</Link>
                                </li>
                                <li >
                                    <Link className="btn btn-primary text-white" to='/signup'>
                                        Sign Up
                                    </Link>

                                </li>

                            </>
                    }

                </div>
            </div>
        </div>

    );
};

export default Header;