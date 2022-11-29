import React from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handelLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email,password)
    }



    const navigateToSignup = (event) => {
        navigate('/signup');
    }
    return (
        <div>
            <h1 className='text-center text-primary my-3'>Please Login</h1>
            <Form onSubmit={handelLogin} className='mx-auto w-50 left  loginfrom'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-success ' style={{ 'fontSize': '20px' }}>Email address</Form.Label>
                    <Form.Control className='w-75' type="email" placeholder="Enter email" required name='email' />
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
                <p className='text-primary'>Visited Ours WareHouse ? <Link to='/signup' onClick={navigateToSignup} className='text-danger  pe-auto'>SignUp</Link></p>
            </Form>

        </div>
    );
};

export default Login;