// import { useQuery } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/booking?email=${user?.email}`;
    const { data: booking = [], isLoading } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;

        }



    })
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1 className='text-3xl'>My Orders</h1>
            <br></br>
            <div className="overflow-x-auto">
                <table className="table w-auto
                ">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email Id</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Location</th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            booking?.map((booking, i) => <tr
                                key={booking._id}
                            >

                                <th>{i + 1}</th>
                                <td>{booking.buyerName}</td>
                                <td>{booking.email}</td>
                                <td>{booking.productName}</td>
                                <td>{booking.price}</td>
                                <td>{booking.location}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;