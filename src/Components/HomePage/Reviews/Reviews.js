import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='review-page mt-5 '>
          <div className="container">
          <h1 style={{'fontSize':'40px'}} className='products-title2 py-4'>All Review</h1>
            <div className="row g-5 ">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
          </div>
        </div>
    );
};

export default Reviews;