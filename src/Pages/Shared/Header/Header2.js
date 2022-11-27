<div className='shadow-2xl mt-5 mx-9 '>
    <div className="navbar bg-base-100  ">
        <div className="navbar-start ">
            <Link className="btn btn-ghost normal-case text-xl ml-3 mx-9"> 🥘 LUNCH ZONE</Link>
        </div>
        <div className="navbar-center hidden lg:flex">

            <ul className="menu menu-horizontal p-0">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li> <Link className='' to='/addservice' >Add Service</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li> <Link className='' to='/review' >My Review</Link></li>
            </ul>
        </div>
        <div className="navbar-end  gap-4">


            {
                user?.uid ? <>

                    <Link className="btn" to='/logout' onClick={handelLogout}>LogOut</Link>

                </>
                    :
                    <>
                        <Link className="btn" to='/login'>Login</Link>
                        <Link className="btn" to='/signup'>Register</Link>


                    </>
            }

        </div>
    </div>
</div>