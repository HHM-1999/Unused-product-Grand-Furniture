import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllSeller = () => {
    const url = ("http://localhost:5000/users?role=Seller");
    const { data: allSellers = [], isLoading, refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;

        }

    })
    const handleVerifySeller = (mySeller) => {

        const id = mySeller._id;
        console.log(mySeller);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('verification done successfully');
                }

            })


    }


    const handleSellerDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                toast.success("User Delete Successfully");
                refetch();
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div>
                <div>
                    <h1 className='text-3xl'>All Seller</h1>
                    <br></br>
                    <div className="overflow-x-auto">
                        <table className="table w-auto">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Mode</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    allSellers?.map((allseller, i) => <tr
                                        key={allseller._id}

                                    >

                                        <td>{i + 1}</td>
                                        <td>{allseller.name}</td>
                                        <td>{allseller.email}</td>
                                        <td>{allseller.role}</td>


                                        <td>
                                            {/* <button onClick={() => handleAvailable(allproduct?._id)} className='btn btn-sm-primary'>Available</button> */}

                                            {
                                                (allseller?.verify === 'verify')
                                                    ?
                                                    <button className='btn btn-ghost btn-sm'>✔️</button>
                                                    :
                                                    <button onClick={() => handleVerifySeller(allseller?._id)} className='btn btn-secondary btn-sm'>Verify Seller</button>

                                            }



                                        </td>

                                        <td><button onClick={() => handleSellerDelete(allseller?._id)} className='btn btn-primary btn-sm'>delete</button>


                                        </td>

                                    </tr>)

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSeller;