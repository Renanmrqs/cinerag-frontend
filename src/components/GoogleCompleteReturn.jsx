import { useState, useEffect, useContext } from "react"
import { patchRegister } from "../services/AuthService.js" 
import { AuthProviderContext } from "../context/UserContext"
import Toast from "../components/Toast.jsx"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import {  useSearchParams } from "react-router-dom"
import { jwtDecode } from "jwt-decode"

function GoogleCompleteReturn () {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [errorToast, setErrorToast] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()

    const {login} = useContext(AuthProviderContext)
    
    const navigate = useNavigate()
    


    const handleSubmit = async (event) => {
        event.preventDefault()
        const token = searchParams.get("token")
        
        try {
            const registerReponse = await patchRegister(username, password, token)
            login({access_token: registerReponse.access_token, user_id: registerReponse.user_id, username: username})
            navigate("/home")
        } catch (error) {
            setErrorToast(error)
            return
        }
    
    
    }

   


    return (
        <section className="container-auth">
            <div className="title-auth">
                <h1>CineRag Analytics</h1>
            </div>
            <form className="form-auth" onSubmit={(event) => handleSubmit(event)}>
                <h2>Complete Google Register</h2>
                    
                    <div className="identify-container">
                        <label htmlFor="username-register">Username:</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} id="username-register" className="username-register" type="text" required/>
                    </div>
                   

                    <div className="password-container">
                        <label htmlFor="password-register">Password:</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} id="password-register" className="password-login" type="password" required/>
                    </div>
                    
                    <div className="auth-btns">
                        <input className="primary-btn submit-auth" type="submit"/>
                       
                    </div>
                   
                    
                    <div>
                        {errorToast && (
                        <Toast variant="toast toast-error" trigger={true} onClose={() => setErrorToast(null)}>
                            {errorToast}
                        </Toast>
                        )}
                    </div>
            </form>
        </section>
    )
}

export default GoogleCompleteReturn