import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannar_1 from '../../../../src/img/bannar/bannar_1.png';
import bannar_2 from '../../../../src/img/bannar/bannar_2.png';
import bannar_3 from '../../../../src/img/bannar/bannar_3.png';
import './Bannar.css';

const Bannar = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    style={{ 'height': '400px' }}
                    className="d-block w-100 "
                    src={bannar_1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ 'height': '400px' }}
                    className="d-block w-100"
                    src={bannar_2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ 'height': '400px' }}
                    className="d-block w-100"
                    src={bannar_3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Bannar;