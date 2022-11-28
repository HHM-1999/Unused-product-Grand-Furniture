import moment from 'moment';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';



const BookingModal = ({ booking, RecentTime }) => {
    const { name, resale_price } = booking;
    const date = moment().format(RecentTime);
    const { user } = useContext(AuthContext);
    const modalsubmit = (e) => {
        e.preventDefault();
        toast.success("Submitted Done")
        const form = e.target;

        const buyerName = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const bookingProduct = {
            buyerName,
            email,
            phone,
            location,
            productName: name,
            price

        }
        console.log(bookingProduct);
        fetch('https://server-side-hhm-1999.vercel.app/bookings', {
            method: 'POST',
            headers: {
                "content-type": "application/json"

            },
            body: JSON.stringify(bookingProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Booking Successful')

                }
            })

    }



    return (
        <div>
            <input type="checkbox" id="modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={modalsubmit} className='grid grid-cols-1'>
                        <input type="text" placeholder='Type here' className='input w-full  mt-3 input-bordered' value={date} disabled />
                        <input type="text" placeholder='Type here' name='name' className='input w-full  mt-3 input-bordered' value={user?.displayName} disabled />
                        <input type="email" placeholder='Type here' className='input w-full mt-3 input-bordered' name="email" value={user?.email} disabled />
                        <input type="text" placeholder='Type here' className='input w-full   mt-3 input-bordered' name="price" value={resale_price} disabled />
                        <input type="text" placeholder='Phone Number' name='phone' className='input w-full   mt-3 input-bordered' />
                        <input type="text" placeholder='Location' name='location' className='input w-full   mt-3 input-bordered' />

                        <input className='w-full mt-3 btn btn-primary' type="submit" value="Submit"></input>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;