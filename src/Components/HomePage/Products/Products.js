import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/UseProducts';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
  const [products , setProducts] = useProducts([]);
  
    return (
        <div id='products' className=" products p-5">
            <div className="container">
                <div className='mt-4 '>
                    <h1 className='text-success text-center my-4'>Ours Products</h1>
                    <div className=" row g-1">
                        {
                            products.slice(0, 6).map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </div>
            </div>
            <div className="seemore">
                <Link to='/allProducts'>
                    <span><i class="fa-regular fa-cowbell-circle-plus"></i></span>
                    <button class="button-48" role="button">

                        <span class="text">
                            <span className='pe-2'>  </span>
                            See More ...!!!</span>
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default Products;