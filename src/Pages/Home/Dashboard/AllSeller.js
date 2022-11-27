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
    // const { data: allAdmin = [] } = useQuery({
    //     queryKey: ['allAdmin'],
    //     queryFn: async () => {
    //         const res = await fetch("http://localhost:5000/users?role=admin");
    //         const data = await res.json();
    //         return data;

    //     }

    // })

    const handleSellerDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
                toast.success("User Delete Successfully");
                refetch();
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    // const handleAdmin = (id) => {
    //     console.log(id);
    //     fetch(`http://localhost:5000/users/${id}`, {
    //         method: 'PUT'

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             refetch();
    //             toast.success("Congratulation");
    //             refetch();
    //         })
    // }

    return (
        <div>
            <div>
                <div>
                    <h1 className='text-3xl'>All Seller</h1>
                    <br></br>
                    <div className="overflow-x-auto">
                        <table className="table w-auto
                ">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email Id</th>
                                    <th>Role</th>
                                    <th>Action</th>


                                </tr>
                            </thead>
                            <tbody>


                                {
                                    allSellers?.map((allseller, i) => <tr
                                        key={allseller._id}

                                    >

                                        <th>{i + 1}</th>
                                        <td>{allseller.name}</td>
                                        <td>{allseller.email}</td>
                                        <td>{allseller.role}</td>
                                        <td><button onClick={() => handleSellerDelete(allseller?._id)} className='btn btn-primary btn-sm'>delete</button>
                                            {/* <button onClick={() => handleAdmin(allseller?._id)} className='btn btn-sm-primary'>Admin</button> */}

                                        </td>

                                    </tr>)
                                }

                                {/* {
                                    allAdmin?.map((allseller, i) => <tr
                                        key={allseller._id}

                                    >

                                        <th>{i + 1}</th>
                                        <td>{allseller.name}</td>
                                        <td>{allseller.email}</td>
                                        <td>{allseller.role}</td>
                                        <td><button onClick={() => handleSellerDelete(allseller?._id)} className='btn btn-sm-primary mx-2'>delete</button>
                                            <button onClick={() => handleAdmin(allseller?._id)} className='btn btn-sm-primary'>Admin</button>

                                        </td>

                                    </tr>)
                                } */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSeller;