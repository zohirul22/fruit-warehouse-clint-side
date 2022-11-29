import React from 'react';
import './Contract.css'

const Contract = () => {
    return (
        <div class="container">
            <div class="row mt-5 p-3">
                <div class="col-lg-4 col-md-6 col-sm-12 ">
                    <div class="card text-white bg-success mb-3" >

                        <div class="card-body">
                            <h5 class="card-title3"> <span><i class="fa-solid fa-phone-volume"></i></span>  Call Us</h5>
                            <div className="line-space">
                                <p>08971357</p>
                                <p>01738971</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 ">
                    <div class="card text-white bg-danger mb-3" >

                        <div class="card-body">
                            <h5 class="card-title3"> <span><i class="fa-solid fa-location-dot"></i></span> Location</h5>
                            <p class="card-text3">121 No Rood,Mirpur 11,Dhaka,bangladesh</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 ">
                    <div class="card text-dark bg-warning mb-3">

                        <div class="card-body">
                            <h5 class="card-title3"> <span><i class="fa-solid fa-clock"></i></span>  Hours</h5>
                            <p class="card-text3">Every Day in-08:00AM To 10:00PM </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Contract;