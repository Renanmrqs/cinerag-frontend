import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthProviderContext } from "../context/UserContext";
import { useContext } from "react";


function ProtectedRouter () {
    const {user, login, trigger} = useContext(AuthProviderContext)
    const location = useLocation()
    const triggerUser = trigger()

    if (!triggerUser) {
        return <div>
            loading
        </div>
    }
    

    if (!user.accessToken) {
            return <Navigate to={"/login"} state={{from: location}} replace />
        }

    

    return <Outlet/>
}

export default ProtectedRouter