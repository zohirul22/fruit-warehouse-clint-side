import React from 'react';
import { Card} from 'react-bootstrap';
import useProducts from '../../Hooks/UseProducts';
import './AllProduct.css'

const AllProduct = ({ product }) => {
    const [products, setProducts] = useProducts([]);
    const { name, img, price, supplier, description, quantity, id } = product;


const deleteProduct=(id)=>{
const proceed = window.confirm('Are U sure deleting');
if(proceed){
    const url = `http://localhost:5000/products/${id}`
    fetch(url , {
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const reaming = products.filter(product => product._id !== id);
        setProducts(reaming)
    })

}
}







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
                    <Card.Text  > {description} </Card.Text>
                </Card.Body>

                <Card.Body style={{'textAlign':'center'}}>
               
                <button onClick={()=>deleteProduct(product._id)}  class="button-33" role="button"> 
            
                 Delete</button>
                  
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllProduct;