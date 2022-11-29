import React from 'react';
import './NotFound.css'
import notFound from '../../../../src/img/404.png'

const NotFound = () => {
    return (
        <div className='notfound'>
          
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h3 class="animate-charcter"> Not More Found</h3>
                    </div>
                </div>
            </div>
            <img className='notfoundImg' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;