import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import BookingModal from '../Home/Categories/BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';

const Advertise = () => {

    const { data: focusProducts = [], isLoading } = useQuery({
        queryKey: ['focusProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allproducts/home?role=available');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='mt-8 text-black font-bold text-7xl text-center'> Advertise Items </h2>
            <div className='grid gap-9 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-2 mx-9 mt-9'>
                {
                    focusProducts?.map(focusproduct => {
                        return (
                            <div key={focusproduct?._id} className="card w-full card-compact bg-base-100 shadow-xl">

                                <div className="card-body gap-9">
                                    <h2 className="card-title flex justify-between ">
                                        <span className='text-center item-center text-2xl'>{focusproduct?.ProductName}</span>
                                        <span className='text-sm'>  {focusproduct?.photo}</span>
                                        <br>
                                        </br>
                                        <br></br>
                                        <span className='text-sm'> Original Price:{focusproduct?.OriginalPrice}</span>
                                        <span className='text-sm'> Resale Price: {focusproduct?.ResalePrice}</span>


                                    </h2>

                                    <div className="card-actions justify-end">
                                        <label htmlFor="modal" className="btn btn-sm btn-warning text-black">Added✔️</label>
                                        {/* <BookingModal focusProduct={focusproduct}></BookingModal> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Advertise;