import { useEffect } from "react"
import Spinner from "../components/Spinner"
import {  useSearchParams } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { useContext } from "react"
import { AuthProviderContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

function GoogleCallbackReturn () {
    const [searchParams, setSearchParams] = useSearchParams()
    const {login} = useContext(AuthProviderContext)
    const navigate = useNavigate()
    useEffect (() => {
        const token = searchParams.get("token")
        const decoded = jwtDecode(token)
        login({access_token: token, user_id: decoded.sub, username: decoded.username})
        navigate("/home")
    }, [])
    
    return (
        <Spinner loading={true}></Spinner>
    )
}

export default GoogleCallbackReturn