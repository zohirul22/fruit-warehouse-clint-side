import React from 'react';
import {  Card } from 'react-bootstrap';
import './Review.css'

const Review = ({ review }) => {
    const { name, img, description, id } = review;
    return (
        <div className=' col-xm-12 col-sm-6 col-md-4 col-lg-3 '>
            <Card style={{'backgroundColor':'linear-gradient(rgb(148, 148, 250),rgb(158, 233, 240))'}} className='review-card' >
                <Card.Img style={{'width':'150px'}}  className='review-img' variant="top" src={img}  />
                <Card.Body>
                    <Card.Title className='review-name'>{name}</Card.Title>
                    <p className='review-des'>**   {description}   **</p>
                  
                    <div style={{ 'fontSize': '15px' }}>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                                <i class="fa-solid fa-star text-warning"></i>
                            </div>
                   
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;