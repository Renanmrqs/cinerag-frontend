import { useState, useEffect, useContext } from "react"
import { postLogin, postRegister } from "../services/AuthService.js" 
import { AuthProviderContext } from "../context/UserContext"
import Toast from "../components/Toast.jsx"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Spinner from "../components/Spinner.jsx"

function FormRegister () {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [errorToast, setErrorToast] = useState(null)
    const [isLOading, setIsLoading] = useState(false)

    const {user, login} = useContext(AuthProviderContext)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        
        try {
            const registerReponse = await postRegister(username, email, password)
        } catch (error) {
            setIsLoading(false)
            setErrorToast(error)
            return
        }
    
        try {
            const userResponse = await postLogin(username, password)
            login(userResponse)
            setIsLoading(false)
            navigate('/home')
        } catch (error) {
            setIsLoading(false)
            setErrorToast(error)
        }
    
    }

   


    return (
        <section className="container-auth">
            <div className="title-auth">
                <h1>CineRag Analytics</h1>
            </div>
            <form className="form-auth" onSubmit={(event) => handleSubmit(event)}>
                <h2>Register</h2>
                    
                    <div className="identify-container">
                        <label htmlFor="username-register">Username:</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} id="username-register" className="username-register" type="text" required/>
                    </div>
                   
                    <div className="email-container">
                        <label htmlFor="email-register">Email:</label>
                        <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} id="email-register" className="email-register" required/>
                    </div>

                    <div className="password-container">
                        <label htmlFor="password-register">Password:</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} id="password-register" className="password-login" type="password" required/>
                    </div>
                    
                    <div className="auth-btns">
                        <input className="primary-btn submit-auth" type="submit"/>
                        <button type="button" className="btn-outline auth-google" onClick={() => {window.location.href = "http://127.0.0.1:8000/auth/google"}}>Register with google</button>
                       
                    </div>
                   
                    
                    <div>
                        {errorToast && (
                        <Toast variant="toast toast-error" trigger={true} onClose={() => setErrorToast(null)}>
                            {errorToast}
                        </Toast>
                        )}
                    </div>
            </form>
            <Link className="btn-outline link-btn"  to={'/login'}>Already have account? click here</Link>
            <Spinner loading={isLOading}></Spinner>
        </section>
    )
}

export default FormRegister