
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';



const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const handleAdd = (e) => {
        e.preventDefault();
        toast.success("Product Added")
        const form = e.target;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const photo = form.photo.value;
        const ProductName = form.ProductName.value;
        const Category = form.Category.value;
        const OriginalPrice = form.OriginalPrice.value;
        const ResalePrice = form.ResalePrice.value;
        const YearUse = form.YearUse.value;
        const details = form.details.value;

        const AddProduct = {
            ProductName,
            Category,
            email,
            phone,
            photo,
            location,
            OriginalPrice,
            ResalePrice,
            YearUse,
            details
        }
        console.log(AddProduct);
        fetch('http://localhost:5000/allproducts', {
            method: 'POST',
            headers: {
                "content-type": "application/json"

            },
            body: JSON.stringify(AddProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(' Successfully Done')

                }
            })










        // const { user } = useContext(AuthContext);
        // const url = `http://localhost:5000/users?email=${user?.email}`;
        // const { data: booking = [], isLoading } = useQuery({
        //     queryKey: ['booking', user?.email],
        //     queryFn: async () => {
        //         const res = await fetch(url);
        //         const data = await res.json();
        //         return data;

        //     }



        // })
        // if (isLoading) {
        //     return <Loading></Loading>
        // }
    }

    return (
        <div className=' p-5 mx-9 shadow-2xl w-auto'>



            <h1 className='text-black text-3xl'>Add Product</h1>
            <br></br>
            <form onSubmit={handleAdd} className='grid lg:grid-cols-2 gap-2 '>
                <input type="text" name="ProductName" placeholder='Product Name' className='input w-full mt-3 input-bordered' />
                <input type="text" name="email" placeholder='email' className='input w-full mt-3 input-bordered' defaultValue={user?.email} readOnly />



                <input type="text" name="phone" placeholder='Phone Number' className='input w-full  mt-3 input-bordered' />
                <input type="text" name="Category" placeholder='Category' className='input w-full mt-3 input-bordered' />


                <input type="file" name="photo" placeholder='Upload photo' className='input w-full mt-3 input-bordered' required />

                <input type="text" name="OriginalPrice" placeholder='Original Price' className='input w-full   mt-3 input-bordered' />
                <input type="text" name="ResalePrice" placeholder='Resale Price' className='input w-full   mt-3 input-bordered' />
                <input type="text" name="location" placeholder='Location' className='input w-full   mt-3 input-bordered' />
                <input type="text" name="YearUse" placeholder='Year Of Use' className='input w-full   mt-3 input-bordered' />

                <input type="text" name="details" placeholder='Product Details' className='input w-full   mt-3 input-bordered' />
                <br></br>
                <input className='w-full mt-3 btn btn-primary text-center' type="submit" value="Add A Product"></input>




            </form>



        </div>



    );
};

export default AddProduct;