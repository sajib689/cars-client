import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading) {
        return <h1>Loading...</h1>
    }
   if(user) {
    return children
   }
   return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoutes;