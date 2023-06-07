import { useContext } from "react";
import { AuthContext } from "../Page/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const location =useLocation();
    const { loading,  user} = useContext(AuthContext);
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from:location}}replace></Navigate>
};

export default PrivateRoute;