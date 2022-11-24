import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProducts from './SingleProducts';



const Products = () => {
    const product = useLoaderData();
    const { products } = product;

    return (
        <div className='grid gap-6 grid-rows-1 md:grid-rows-2 lg:grid-rows-2 mx-9 mt-9'>

            {
                products?.map(product => <SingleProducts
                    key={product.id}
                    product={product}
                ></SingleProducts>)
            }


        </div>
    );
};

export default Products;