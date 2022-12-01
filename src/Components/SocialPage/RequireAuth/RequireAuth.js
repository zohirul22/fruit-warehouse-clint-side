import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';


const RequireAuth = ({ children }) => {
    const [user, Loading] = useAuthState(auth);
    let location = useLocation();

    if (Loading){
        return  <Spinner animation="border" variant="primary" />

    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;

};

export default RequireAuth;