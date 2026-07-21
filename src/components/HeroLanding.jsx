import Button from "./Button/Button";
import { Link } from "react-router-dom";
import cineragLogo from "../assets/cinerag_logo.png"

function landingHero() {
    return (
        <section className="landing-hero">
            <div className="hero-content">
                <div className="content-title">
                    {/* <img src={cineragLogo} alt="CineRag"/> */}
                    <h1>Cinerag Analytics</h1>
                    
                </div>
                
                <p>
                    See all reviews of your favorite movies by an excellent AI model, and
                    speak with our chat AI assistant CineAI about recommendations and your favorite movies.
                </p>
                <div className="hero-display-btn">
                    <Link to={"/Register"}><Button variant="hero-btn primary-btn small-btn-size ">Try Now</Button></Link>
                    <Link to={"https://github.com/Renanmrqs/cinerag-frontend"} target="_blank"><Button variant="secondary-btn small-btn-size hero-git-btn">GitHub</Button></Link>
                </div>

            </div>
        </section>

    )
}

export default landingHero