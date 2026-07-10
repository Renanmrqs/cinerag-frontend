import { useState, useEffect, useContext } from "react"
import { postLogin } from "../services/PostLogin" 
import { AuthProviderContext } from "../context/UserContext"

function FormLogin () {
    const [password, setPassword] = useState("")
    const [identify, setIdentify] = useState("")

    const {user, login} = useContext(AuthProviderContext)
    

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        try {
            const userResponse = await postLogin(identify, password)
            // console.log(userResponse)
            login(userResponse)
            console.log(userResponse)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="container-login">
            <div className="title-login">
                <h1>CineRag Analytics</h1>
            </div>
            <form className="form-login" onSubmit={(event) => handleSubmit(event)}>
                <h2>Login</h2>
                    
                    <div className="identify-container">
                        <label htmlFor="identify-login">Identify:</label>
                        <input value={identify} onChange={(e) => setIdentify(e.target.value)} id="identify-login" className="identify-login" type="text" required/>
                    </div>
                   
                    <div className="password-container">
                        <label htmlFor="password-login">Password:</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} id="password-login" className="password-login" type="password" required/>
                    </div>
                    
                    <div className="login-btns">
                        <input className="secondary-btn submit-login" type="submit"/>
                        <button type="button" className="primary-btn login-google">Sing in with google</button>
                    </div>
            </form>
        </section>
    )
}

export default FormLogin