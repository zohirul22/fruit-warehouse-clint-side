import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import FooterLogo from '../FooterLogo/FooterLogo';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div class="container">
                <div class="row ">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <h3 className='footer-title'>Products</h3>
                        <div className="footer-para">
                            <p>Apple</p>
                            <p>Orange</p>
                            <p>Mango</p>
                            <p>Banana</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <h3 className='footer-title'>Company Hear</h3>
                        <div className="footer-para">
                            <p>Dhaka</p>
                            <p>Kushtia</p>
                            <p>pabna</p>
                            <p>Rajbari</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <h3 className='footer-title'>Help Center</h3>
                        <div className="footer-para">
                            <p>Rajbari Office</p>
                            <p>pabna Office</p>
                            <p>kolkata Office</p>
                            <p>pabna Office</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <h3 className='footer-title mb-5'>Contract Us</h3>
                        
                        <div className="footer-para">
                            <InputGroup className="mb-5">
                                <Form.Control
                                    placeholder="Your Name"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    Submit
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
                <FooterLogo></FooterLogo>
            </div>
        </div>
    );
};

export default Footer;