import React from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";

    let elementError
    if (error) {
        elementError = <p className='text-success'>Error: {error?.message} </p>

    }



    const handelLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }

    const navigateToSignup = (event) => {
        navigate('/signup');
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const navigateToResetPassword = async (event) => {
        const email = event.target.email.value;
        await sendPasswordResetEmail(email);

        toast('Sent email');
    }


    return (
        <div>
            <h1 className='text-center text-primary my-3 '>Please Login</h1>
            <Form onSubmit={handelLogin} className='mx-auto w-50 left  loginfrom'>
                <Form.Group className="mb-3 ms-2" controlId="formBasicEmail">
                    <Form.Label className='text-success ' style={{ 'fontSize': '20px' }}>Email address</Form.Label>
                    <Form.Control className='w-75' type="email" placeholder="Enter email" required name='email' />
                  
                </Form.Group>

                <Form.Group className="mb-3 ms-2" controlId="formBasicPassword">
                    <Form.Label className='text-success ' style={{ 'fontSize': '20px' }}>Password</Form.Label>
                    <Form.Control className='w-75' type="password" placeholder="Password" name='password' required />
                </Form.Group>


                <button className="button-36 ms-2" role="button" type='submit'>Login</button>
                {elementError}

                <p className='text-primary ms-2'>Visited Ours WareHouse ? <Link to='/signup' onClick={navigateToSignup} className='text-danger  pe-auto'>SignUp</Link></p>

                <p className='text-primary ms-2'>Forgetting Password? <a onClick={navigateToResetPassword} className='text-danger  pe-auto'>Reset Password</a></p>
                <SocialLogin></SocialLogin>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Login;