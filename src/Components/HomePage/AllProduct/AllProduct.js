import React from 'react';
import { Card} from 'react-bootstrap';
import './AllProduct.css'

const AllProduct = ({ product }) => {
    const { name, img, price, supplier, description, quantity, id } = product;
    return (
        <div className=' col-xm-12 col-sm-6 col-md-6 col-lg-4'>
            <Card className='card'>
                <Card.Img className='card-img' variant="top" src={img} />
                <Card.Body style={{ 'textAlign': 'left' }}>
                    <Card.Title style={{ 'fontSize': '12px' }}>Name:{name}</Card.Title>
                    <Card.Title style={{ 'fontSize': '12px' }}>Supplier:{supplier}</Card.Title>
                    <Card.Title style={{ 'fontSize': '12px' }}>Name:{name}</Card.Title>

                    <Card.Title style={{ 'fontSize': '12px' }}>Price: $ {price} (1 KG)</Card.Title>
                    <Card.Title style={{ 'fontSize': '12px' }}>Quantity:{quantity}</Card.Title>
                    <Card.Text> {description} </Card.Text>
                </Card.Body>

                <Card.Body style={{'textAlign':'center'}}>
               
                <button class="button-33" role="button"> 
            
                 Delete</button>
                  
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllProduct;