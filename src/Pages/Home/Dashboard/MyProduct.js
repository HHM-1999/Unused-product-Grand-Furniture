import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProduct = () => {
    const { user } = useContext(AuthContext);

    const { data: allproducts = [], isLoading, refetch } = useQuery({
        queryKey: ['allproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allproducts?email=${user?.email}`);
            const data = await res.json();
            return data;

        }

    })
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/allproducts/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
                toast.success("Delete Successfully");
            })
    }

    return (
        <div className='mt-9 mx-9'>
            <h2>Products: {allproducts?.length}</h2>
            <div>
                <h1 className='text-3xl'>My Orders</h1>
                <br></br>
                <div className="overflow-x-auto">
                    <table className="table w-auto
                ">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Original Price</th>
                                <th>Resale Price</th>
                                <th>Product Name</th>
                                <th>Status</th>
                                <th>Action</th>


                            </tr>
                        </thead>
                        <tbody>


                            {
                                allproducts?.map((allproducts, i) => <tr
                                    key={allproducts._id}
                                >

                                    <th>{i + 1}</th>
                                    <td>{allproducts.name}</td>
                                    <td>{allproducts.OriginalPrice}</td>
                                    <td>{allproducts.ResalePrice}</td>
                                    <td><button onClick={() => handleDelete(allproducts?._id)} className='btn btn-sm-primary'>Available</button></td>
                                    <td><button onClick={() => handleDelete(allproducts?._id)} className='btn btn-sm-primary'>delete</button></td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;