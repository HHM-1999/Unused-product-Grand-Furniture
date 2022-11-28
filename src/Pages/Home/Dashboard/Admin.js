import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const Admin = () => {

    const { user } = useContext(AuthContext);
    const url = `https://server-side-hhm-1999.vercel.app/users?email=${user?.email}`;
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;

        }

    })
    if (isLoading) {
        return <Loading></Loading>
    }

    ////delete

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://server-side-hhm-1999.vercel.app/users/${id}`, {
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
        <div>
            <div>
                <h1 className='text-3xl'>Admin Panel</h1>
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
                                users?.map((users, i) => <tr
                                    key={users._id}
                                >

                                    <th>{i + 1}</th>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.role}</td>
                                    <td><button onClick={() => handleDelete(users?._id)} className='btn btn-sm-primary'>delete</button></td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin;