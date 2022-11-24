import React from 'react';
import { Link } from 'react-router-dom';

const SingleProducts = () => {
    // const s = product.length;
    // console.log("total: ", s);
    return (
        <div>
            <div className='mx-9 mt-9'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="" alt="Movie" /></figure>
                    <div className="card-body">
                        <h1 className="card-title">Products Name: <strong></strong></h1>
                        <p>Location :</p>
                        <p>Original Price :</p>
                        <p>Resale Price :</p>
                        <p>Year Of Use :</p>
                        <p>Time :</p>
                        <div className="card-actions justify-end">
                            <Link className="btn btn-primary">Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;