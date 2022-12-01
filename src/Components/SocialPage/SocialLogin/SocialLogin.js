import React from 'react';
import './SocialLogin.css'
import google from '../../../../src/img/unnamed (1).png'
import OthersLogin from '../OthersLogin/OthersLogin';

const SocialLogin = () => {
  return (
    <div>
      {/**************  or************/}
      <div className="d-flex align-items-center divcenter">
        <div style={{ height: '1px' }} className="bg-dark w-100 ms-5"></div>
        <p className='mt-2 mx-2'>OR</p>
        <div style={{ height: '1px' }} className="bg-dark w-100 me-5"></div>
      </div>
      {/**************  or************/}
      <OthersLogin></OthersLogin>

    </div>
  );
};

export default SocialLogin;