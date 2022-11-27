import React from 'react';
import './AllProducts.css'
import useProducts from '../../Hooks/UseProducts';
import AllProduct from '../AllProduct/AllProduct';

const AllProducts = () => {
    const [products, setProducts] = useProducts([])
    return (
        <div className="all-products">

            <h1 className='products-title py-4'>All-Products</h1>
            <div className="">

            </div>
            <div className=' container'>

                <div className="row g-3 ">
                    {
                        products.map(product => <AllProduct
                            key={product.id}
                            product={product}
                        ></AllProduct>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AllProducts;