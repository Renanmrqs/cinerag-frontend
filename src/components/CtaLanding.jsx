import Button from "./Button/Button"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function CtaCadastring () {
    return (
        <section className="cta-section">
            <h1>Stop guessing, start analyzing</h1>
            <p>Join those who already discovered what critics really think — powered by AI, completely free.</p>
            <Link to={"/register"} ><Button variant="primary-btn">Try now</Button></Link> 
        </section>
        
    )
}

export default CtaCadastring