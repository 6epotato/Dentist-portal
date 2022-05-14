import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


// here children is <requireauth>s children mean under its body
const RequiredAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        // when reload button was pressed then we have to add a loading component otherwise the page will reload and will give a feedback that no user found
        return <Loading></Loading>
    }

    if (!user) {
        // if user us not found here then it will go back to the login from
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


    return children;
};

export default RequiredAuth;