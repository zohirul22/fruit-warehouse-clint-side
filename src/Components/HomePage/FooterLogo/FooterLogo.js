import React from 'react';
import logo from '../../../../src/img/Facebook_Logo (2).png'
import google from '../../../../src/img/unnamed (1).png'

const FooterLogo = () => {
    return (
        <div>
            <div className="">
                <span className='me-3'><img src={logo} alt="" /></span>
             
                <span><img src={google} alt="" /></span>
               
              
            </div>
        </div>
    );
};

export default FooterLogo;