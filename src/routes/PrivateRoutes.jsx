import { use } from 'react';
import Loading from '../components/Loading';
import { AuthDataContext } from '../Contexts/AuthDataContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user,loading}=use(AuthDataContext)
    const location =useLocation()

    if(loading) {return <Loading></Loading>}

    if(!user){
        return <Navigate to='/login' state={location?.pathname}></Navigate>
    }
    return children
};

export default PrivateRoutes;