import moment from 'moment';
import React from 'react';


const SingleProducts = ({ product, setBooking }) => {
    const CurrentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(CurrentTime);
    const RecentTime = { CurrentTime };

    // const s = product.length;
    // console.log("total: ", s);
    const { picture, name, location, original_price, resale_price, year_of_use } = product;
    // console.log(product);
    return (
        <div>
            <div className='mx-9 mt-9'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="Movie" /></figure>
                    <div className="card-body">
                        <h1 className="card-title">Products Name: <strong>{name}</strong></h1>
                        <p>Location :{location}</p>
                        <p>Original Price :{original_price}</p>
                        <p>Resale Price :{resale_price}</p>
                        <p>Year Of Use :{year_of_use}</p>
                        <p>Time : {RecentTime?.CurrentTime}</p>
                        <div className="card-actions justify-end">

                            <label onClick={() => setBooking(product)}
                                htmlFor="modal" className="btn btn-primary text-white">Book Now</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;