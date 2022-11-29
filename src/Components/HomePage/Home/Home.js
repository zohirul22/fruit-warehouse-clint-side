import React from 'react';
import About from '../About/About';
import Bannar from '../Bannar/Bannar';
import Products from '../Products/Products';

import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className=''>

            <Bannar></Bannar>
            <Products></Products>
            <Reviews></Reviews>
            <About></About>
        </div>
    );
};

export default Home;