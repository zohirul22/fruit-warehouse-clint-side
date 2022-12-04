import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddItem.css'


const AddItem = () => {

    const handelAddProduct = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const price = event.target.price.value;
        const supplier = event.target.supplier.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        console.log(name,supplier,price,quantity,description, img)

        const url =`http://localhost:5000/products`;
        fetch(url , {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
    body:JSON.stringify({name,price,supplier,quantity,description,img})
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        })



    }

    return (
        <div>
            <h1 className='text-center text-success my-3'>Add Product</h1>

            <Form onSubmit={handelAddProduct} className='mx-auto w-50 my-4 addProduct'>
                <Form.Group className="mb-2" >
                    <Form.Control type="text" placeholder="Fruit-name" name='name'/>
                </Form.Group>

                <Form.Group className="mb-2" >
                    <Form.Control type="text" placeholder="supplier" name='supplier'/>
                </Form.Group>

                <Form.Group className="mb-2" >
                    <Form.Control type="text" placeholder="description" name='description'/>
                </Form.Group>

                 <Form.Group className="mb-2" >
                    <Form.Control type="number" placeholder="price" name='price'/>
                </Form.Group> 

                <Form.Group className="mb-2" >
                    <Form.Control type="number" placeholder="quantity" name='quantity'/>
                </Form.Group>

                <Form.Group className="mb-2" >
                    <Form.Control type="text" placeholder="Photo-UrL" name='img'/>
                </Form.Group>
             
                <Button className='add-btn' variant="primary" type="submit">
                    Add-Product
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;