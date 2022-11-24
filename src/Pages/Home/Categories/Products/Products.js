import React from 'react';
import SingleProducts from './SingleProducts';
// import SingleProducts from './SingleProducts';


const Products = () => {
    // const [products, setProducts] = useState([]);
    // // console.log(category)
    // console.log(products);
    // useEffect(() => {
    //     fetch('Catagories.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data.products[0]));
    // }, [])

    return (
        <div className='grid gap-6 grid-rows-1 md:grid-rows-2 lg:grid-rows-2 mx-9 mt-9'>
            {/* {
                products.map(product => <SingleProducts
                    key={product.id}
                    product={product}
                ></SingleProducts>)
            } */}
            <SingleProducts></SingleProducts>

        </div>
    );
};

export default Products;