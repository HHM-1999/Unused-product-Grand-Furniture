import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

import Header from '../Pages/Shared/Header/Header';
import Loading from '../Pages/Shared/Loading/Loading';

// import { AuthContext } from '../Context/AuthProvider/AuthProvider';
// import useAdmin from '../Hooks/useAdmin';



const DashboardLayout = () => {
    // const { user } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email);
    const { user } = useContext(AuthContext);
    // const email = user?.email;
    console.log(user?.email);

    const { data: userRole, isLoading } = useQuery({
        queryKey: ['userrole', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user/${user?.email}`);
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile mx-9 mt-9">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mx-9">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Orders</Link></li>
                        {
                            userRole?.role === 'Seller' && <>
                                <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myProduct'>My Product </Link></li>

                            </>
                        }
                        {
                            userRole?.role === 'Buyer' && <>
                                <li><Link to='/dashboard/allBuyer'>Buyer</Link></li>

                            </>
                        }
                        {userRole?.role === 'Admin' && <>
                            <li><Link to='/dashboard/admin'>Admin</Link></li>
                            <li><Link to='/dashboard/allBuyer'>Buyer</Link></li>
                            <li><Link to='/dashboard/allSeller'>Seller</Link></li>




                        </>

                        }




                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;