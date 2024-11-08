import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-spinner loading-xs"></span>,
            <span className="loading loading-spinner loading-sm"></span>,
            <span className="loading loading-spinner loading-md"></span>,
            <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate >
    );
};

export default PrivateRoute;