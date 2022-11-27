import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllBuyer = () => {
    const url = ("http://localhost:5000/users?role=Buyer");
    const { data: allBuyers = [], isLoading, refetch } = useQuery({
        queryKey: ['allBuyers'],
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
    const handleBuyerDelete = (id) => {
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
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1 className='text-3xl'>All Buyer</h1>
                        <br></br>
                        <div className="overflow-x-auto">
                            <table className="table w-auto
                ">

                                <thead>
                                    <tr>

                                        <th>Name</th>
                                        <th>Email Id</th>
                                        <th>Role</th>
                                        <th>Action</th>


                                    </tr>
                                </thead>
                                <tbody>


                                    {
                                        allBuyers?.map((allbuyer) => <tr
                                            key={allbuyer._id}

                                        >


                                            <td>{allbuyer.name}</td>
                                            <td>{allbuyer.email}</td>
                                            <td>{allbuyer.role}</td>
                                            <td><button onClick={() => handleBuyerDelete(allbuyer?._id)} className='btn btn-primary btn-sm'>delete</button>
                                                {/* <button onClick={() => handleAdmin(allbuyer?._id)} className='btn btn-sm-primary'>Admin</button> */}
                                            </td>

                                        </tr>)
                                    }
                                    {/* {
                                        allAdmin?.map((allbuyer, i) => <tr
                                            key={allbuyer._id}

                                        >

                                            <th>{i + 1}</th>
                                            <td>{allbuyer.name}</td>
                                            <td>{allbuyer.email}</td>
                                            <td>{allbuyer.role}</td>
                                            <td><button onClick={() => handleBuyerDelete(allbuyer?._id)} className='btn btn-sm-primary mx-2'>delete</button>
                                                <button onClick={() => handleAdmin(allbuyer?._id)} className='btn btn-sm-primary'>Admin</button>
                                            </td>

                                        </tr>)
                                    } */}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBuyer;