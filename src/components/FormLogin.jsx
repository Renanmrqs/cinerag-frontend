import { useState, useEffect, useContext } from "react"
import { postLogin } from "../services/AuthService.js"
import { AuthProviderContext } from "../context/UserContext"
import Toast from "../components/Toast.jsx"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function FormLogin() {
    const [password, setPassword] = useState("")
    const [identify, setIdentify] = useState("")
    const [errorToast, setErrorToast] = useState(null)

    const { user, login } = useContext(AuthProviderContext)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const userResponse = await postLogin(identify, password)
            login(userResponse)
            navigate('/home')
        } catch (error) {
            setErrorToast(error)
        }
    }




    return (
        <section className="container-auth">
            <div className="title-auth">
                <h1>CineRag Analytics</h1>
            </div>
            <form className="form-auth" onSubmit={(event) => handleSubmit(event)}>
                <h2>Login</h2>

                <div className="identify-container">
                    <label htmlFor="identify-login">Identify:</label>
                    <input value={identify} onChange={(e) => setIdentify(e.target.value)} id="identify-login" className="identify-login" type="text" required />
                </div>

                <div className="password-container">
                    <label htmlFor="password-login">Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} id="password-login" className="password-login" type="password" required />
                </div>

                <div className="auth-btns">
                    <input className="primary-btn submit-auth" type="submit" />
                    <button type="button" className="btn-outline auth-google" onClick={() => {window.location.href = "http://127.0.0.1:8000/auth/google"}}>Sign in with google</button>
                </div>
                <div>
                    {errorToast && (
                        <Toast variant="toast toast-error" trigger={true} onClose={() => setErrorToast(null)}>
                            {errorToast}
                        </Toast>
                    )}
                </div>
            </form>
            <Link className="btn-outline link-btn " to={'/register'}>Dont have account? click here</Link>

        </section>
    )
}

export default FormLogin