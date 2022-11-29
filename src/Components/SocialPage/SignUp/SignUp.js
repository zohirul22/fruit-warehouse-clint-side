import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

   

    const navigate = useNavigate();
    const navigateToLogin = event => {
        navigate('/login')
    }

    const handelSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }

    if(user){
        navigate('/home')
    }

    return (
        <div>
            <h1 className='text-center text-primary my-3'>Please SignUp</h1>
            <Form onSubmit={handelSignUp} className='mx-auto w-50 left  loginfrom'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-success ' style={{ 'fontSize': '20px' }}>Name</Form.Label>
                    <Form.Control className='w-75' type="text" placeholder="Enter name" name='name' required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-success ' style={{ 'fontSize': '20px' }}>Email address</Form.Label>
                    <Form.Control className='w-75' type="email" placeholder="Enter email" name='email' required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-success ' style={{ 'fontSize': '20px' }}>Password</Form.Label>
                    <Form.Control className='w-75' type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='text-primary'>Visited Ours WareHouse ? <Link to='/login' onClick={navigateToLogin} className='text-danger  pe-auto'>Login</Link></p>
            </Form>

        </div>
    );
};

export default SignUp;