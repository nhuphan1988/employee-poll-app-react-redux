import {Navigate, Outlet} from 'react-router-dom';

const PrivateRoutes = ({ signIn}) => {

    return (
        <div>
            {!signIn 
            ? <Navigate to= "/login"/>
            :<Outlet/>
            }
        </div>
    )
};

export default PrivateRoutes;