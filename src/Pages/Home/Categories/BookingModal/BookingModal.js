import moment from 'moment';
import React from 'react';



const BookingModal = ({ booking, RecentTime }) => {
    const { name, resale_price } = booking;
    const date = moment().format(RecentTime);

    return (
        <div>
            <input type="checkbox" id="modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1'>
                        <input type="text" placeholder='Type here' className='input w-full  mt-3 input-bordered' value={date} disabled />
                        <input type="text" placeholder='Type here' className='input w-full   mt-3 input-bordered' value={resale_price} disabled />
                        <input type="text" placeholder='Phone Number' className='input w-full   mt-3 input-bordered' />
                        <input type="text" placeholder='Location' className='input w-full   mt-3 input-bordered' />


                        <input className='w-full mt-3 btn btn-primary' type="submit" value="Submit"></input>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;