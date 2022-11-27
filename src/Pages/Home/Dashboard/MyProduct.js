import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProduct = () => {
    const { user } = useContext(AuthContext);

    const { data: allproducts, isLoading, refetch } = useQuery({
        queryKey: ['allproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allproducts?email=${user?.email}`);
            const data = await res.json();
            return data;

        }

    })
    const handleAvailable = (myProduct) => {

        // const id = myProduct._id;
        console.log(myProduct);
        fetch(`http://localhost:5000/allproducts/${myProduct}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('advertise successfully')
                }

            })
        // fetch(`http://localhost:5000/allproducts/${id}`, {
        //     method: 'PUT'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.modifiedCount > 0) {
        //             refetch();
        //             toast.success('advertise successfully')
        //         }
        //     })

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

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='mx-9'>
            {/* <h2>Products: {allproducts?.length}</h2> */}
            <div>
                <h1 className='text-3xl'>My Products</h1>
                <br></br>
                <div className="overflow-x-auto">
                    <table className="table w-auto
                ">

                        <thead>
                            <tr>

                                <th>Product Name</th>
                                <th>Original Price</th>
                                <th>Resale Price</th>

                                <th>Status</th>
                                <th>Action</th>


                            </tr>
                        </thead>
                        <tbody>


                            {
                                allproducts?.map((allproduct) => {
                                    return (
                                        <tr key={allproduct._id}>

                                            {/* <th>{i + 1}</th> */}
                                            <td>{allproduct.ProductName}</td>
                                            <td>{allproduct.OriginalPrice}</td>
                                            <td>{allproduct.ResalePrice}</td>


                                            <td>
                                                {/* <button onClick={() => handleAvailable(allproduct?._id)} className='btn btn-sm-primary'>Available</button> */}

                                                {
                                                    (allproduct?.role === 'available')
                                                        ?
                                                        <button className='btn btn-primary btn-sm'>ADVERTIZE RUN</button>
                                                        :
                                                        <button onClick={() => handleAvailable(allproduct?._id)} className='btn btn-secondary btn-sm'>Available</button>

                                                }



                                            </td>


                                            <td><button onClick={() => handleDelete(allproduct?._id)} className='btn btn-primary btn-sm'>delete</button></td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;