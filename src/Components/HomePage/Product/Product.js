import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './product.css'

const Product = ({ product }) => {
    const { name, img, price, supplier, description, quantity, _id } = product;


    const navigate = useNavigate();

    const navigateUpdate = (_id) => {
        navigate(`/detailsPage/${_id}`)
    }



    return (
                <div className=' col-xm-12 col-sm-6 col-md-4 col-lg-2 '>
                    <Card className='product' >
                        <Card.Img className='card-img' variant="top" src={img} />
                        <Card.Body style={{ 'textAlign': 'left' }}>
                            <p style={{ 'fontSize': '12px' }}>Name: {name}</p>

                            <small style={{ 'fontSize': '12px' }}> Quantity : {quantity} KG</small>
                            <small style={{ 'fontSize': '12px' }}> Price: $15 (1-kg)   </small>
                            <div style={{ 'fontSize': '14px' }}>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                            </div>
                            {/******* btn ******** */}
                            <button
                                onClick={() => navigateUpdate(_id)}
                                class="button-48"
                                role="button">
                                <span class="text">
                                    <span className='pe-2'><i class="fa-solid fa-rotate"></i></span>
                                    Update product</span>
                            </button>
                            {/******* btn ******** */}
                        </Card.Body>
                    </Card>
                </div>
        
    );
};

export default Product;