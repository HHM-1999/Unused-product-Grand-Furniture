
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import SingleProducts from './SingleProducts';



const Products = ({ RecentTime }) => {

    const product = useLoaderData();
    const { products } = product;
    const [booking, setBooking] = useState(null);

    return (
        <div className='grid gap-2 grid-rows-1 md:grid-rows-2 lg:grid-rows-2 mx-9 mt-9'>

            {
                products?.map(product => <SingleProducts
                    key={product.id}
                    product={product}
                    setBooking={setBooking}
                ></SingleProducts>)
            }
            {booking &&
                <BookingModal
                    booking={booking}
                    RecentTime={RecentTime}
                ></BookingModal>
            }

        </div>
    );
};

export default Products;