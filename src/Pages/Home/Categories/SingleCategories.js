import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategories = ({ category }) => {
    const { catagories, products, _id, photo } = category;
    console.log(products);

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="products" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-black">{catagories}</h2>
                    <br></br>
                    <div className="card-actions">
                        <Link to={`/products/${_id}`} className="btn btn-primary">See Products</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleCategories;