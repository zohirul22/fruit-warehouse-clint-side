import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const SignUp = () => {

    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating] = useUpdateProfile(auth);



    const navigate = useNavigate();
    const navigateToLogin = event => {
        navigate('/login')
    }

 


    const handelSignUp = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

         createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
       
    }

    if (user) {
        navigate('/home')
        console.log('user', user)
    }


    return (
        <div>
            <h1 className='text-center text-primary my-3'>Please SignUp</h1>
            <Form onSubmit={handelSignUp} className='mx-auto w-50 left  loginfrom'>
                <Form.Group className="mb-3 ms-2" controlId="formBasicEmail">
                    <Form.Label className='text-success ' style={{ 'fontSize': '20px' }}>Name</Form.Label>
                    <Form.Control className='w-75' type="text" placeholder="Enter name" name='name' required />

                </Form.Group>
                <Form.Group className="mb-3 ms-2" controlId="formBasicEmail">
                    <Form.Label className='text-success ' style={{ 'fontSize': '20px' }}>Email address</Form.Label>
                    <Form.Control className='w-75' type="email" placeholder="Enter email" name='email' required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 ms-2" controlId="formBasicPassword">
                    <Form.Label className='text-success ' style={{ 'fontSize': '20px' }}>Password</Form.Label>
                    <Form.Control className='w-75' type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group onClick={() => setAgree(!agree)} className="mb-3 ms-2" controlId="formBasicCheckbox">
                    <Form.Check className={agree ? 'text-primary' : 'text-danger'} type="checkbox" label="Teams and Condition" />
                </Form.Group>
                <button
                    disabled={!agree}
                    className="button-36 ms-2"
                    role="button"
                    type='submit'>SignUp</button>

                <p className='text-primary ms-2'>Visited Ours WareHouse ? <Link to='/login' onClick={navigateToLogin} className='text-danger  pe-auto'>Login</Link></p>
                <SocialLogin></SocialLogin>
            </Form>


        </div>
    );
};

export default SignUp;