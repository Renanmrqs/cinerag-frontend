import Button from "../Button/Button";

function landingHero () {
    return (
        <section className="landing-hero">
            <div className="hero-content">
                 <h1>Cinerag Analytics</h1>
                <p> 
                    See all reviews of your favorite movies by an excellent AI model, and 
                    speak with our chat AI assistant CineAI about recommendations and your favorite movies.
                </p> 
                <div className="hero-display-btn">
                    <Button variant="hero-btn primary-btn small-btn-size ">Try Now</Button>
                    <Button variant="secondary-btn small-btn-size hero-git-btn">GitHub</Button>
                </div>
                
            </div>
        </section>
        
    )
}

export default landingHero