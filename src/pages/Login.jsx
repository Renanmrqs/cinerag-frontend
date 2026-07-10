import { useContext } from "react"
import { AuthProviderContext } from "../context/UserContext"
import FormLogin from "../components/FormLogin"

function Login () {
    
    const {user, login} = useContext(AuthProviderContext)
    
    return (
        <main>
            <FormLogin></FormLogin>
        </main>
       
    )
}

export default Login