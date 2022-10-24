import {Navigate, Outlet} from 'react-router-dom';

// if already signedIn, the display Outlet component, otherwise navigate to '/login'
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