import React from 'react';
import './OthersLogin.css';
import github from '../../../../src/img/socialLogo/github .png';
import google from '../../../../src/img/socialLogo/google.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const OthersLogin = () => {

    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
   


  
    if (googleUser || githubUser ) {
        navigate('/home')
    }
    let elementError;
    if (googleError|| githubError) {
        elementError = <p className='text-danger'>Error: {googleError?.message} {githubError?.message}</p>
    
    }

  


    return (
        <div className="">
               {elementError}
       
        <div className='row justify-content-evenly my-3 g-2'>
         
            <div className="col-lg-6 col-md-12 col-sm-12  d-flex justify-content-evenly align-items-center">

                <button
                    onClick={() => signInWithGoogle()}
                    class="button-63" role="button">
                    <span><img src={google} alt="" /></span>
                    Google
                </button>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12  d-flex justify-content-evenly align-items-center">
                <button 
                onClick={()=>signInWithGithub()}
                class="button-63" role="button"><span class="text">
                    <img style={{ 'color': 'white' }} src={github} alt="" />
                    Github
                </span></button>
            </div>

            </div>
        </div>

    );
};

export default OthersLogin;