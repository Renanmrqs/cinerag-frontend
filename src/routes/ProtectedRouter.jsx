import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthProviderContext } from "../context/UserContext";
import { useContext } from "react";


function ProtectedRouter () {
    const {user, login} = useContext(AuthProviderContext)
    const location = useLocation()

    if (!user.accessToken) {
        return <Navigate to={"/login"} state={{from: location}} replace />
    }

    return <Outlet/>
}

export default ProtectedRouter