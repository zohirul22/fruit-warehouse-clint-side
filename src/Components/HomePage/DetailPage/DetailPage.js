import React, { useEffect, useState } from 'react';
import './DetailPage.css'
import { useNavigate, useParams } from 'react-router-dom';

const DetailPage = () => {
    const { detailsId } = useParams();
    const navigate = useNavigate();
    const [detailspage, setDetailsPage] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${detailsId}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setDetailsPage(data))
    }, [])

 

    const navigateAddItem = (_id) => {
        navigate('/addItem')
    }

    return (
        <div className='detailsPage'>
            <div class="row g-5">
                <div class=" col-lg-4 col-md-6 col-sm-12">
                    <img className='fluid' src={detailspage.img} alt="" />

                </div>
                <div style={{ 'marginTop': '100px' }} class="col-lg-4 col-md-6 col-sm-12 ">
                    <h2 className='text-info'><span className='text-success'>Fruit-Name </span>:{detailspage.name}</h2>
                    <h4 className='text-info'><span className='text-primary'>Fruit-description </span>: {detailspage.description}</h4>
                    <h4 className='text-info'><span className='text-warning'>Fruit-supplier</span> : {detailspage.supplier}</h4>
                    <h3 className='text-danger'><span className='text-dark'>Fruit-quantity</span> : {detailspage.quantity} KG </h3>
                </div>
                <div style={{ 'marginTop': '100px' }} class="col-lg-4 col-md-6 col-sm-12 mx-auto">

                    <button className="button-64 mb-2" role="button"><span class="text">Delivered sell</span></button>
                    <button
                            onClick={()=>navigateAddItem()}
                        className="button-64 mb-2"
                        role="button">
                        <span class="text">
                            Add New Items
                        </span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default DetailPage;