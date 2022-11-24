import React, { useEffect, useState } from 'react';
import SingleCategories from './SingleCategories';

const Categories = ({ category }) => {


    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <div >
                <div className='mt-9'>
                    <h2 className='mt-8 text-black font-bold text-7xl text-center'>Furnitures Category</h2>
                </div>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-9 mt-9'>

                    {
                        categories.map(category => <SingleCategories
                            key={category._id}
                            category={category}

                        ></SingleCategories>)
                    }

                    {
                    /* Card Design
                     {
                        services.map(service => <SingleService
                            key={service._id}
                            service={service}
                            Handleadd={Handleadd}

                        ></SingleService>)
                    } */}




                </div>





            </div>
        </div>
    );
};

export default Categories;