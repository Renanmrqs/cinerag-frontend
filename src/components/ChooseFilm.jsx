import { useState } from "react"
import { useFilmSentiment } from "../hooks/useFilmSentiment"
import { SeeSentimentFilm } from '../components/SeeSentimentFilm';
import Spinner from "../components/Spinner.jsx"
import errorImg from "../assets/error-image.png"

function ChooseFilm ( { item, handleSentiment } ) {
    const [selectedFilm, setSelectedFilm] = useState(null)
    

    return (
        <section className="section-card-choose">
        {item.map( (item) => (
            item.has_reviews ?
            <div className="film-modal-front" key={item.id}>
                {item.poster_path ? 
                <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}.jpg`} alt="poster image" /> 
                : 
                <img src={errorImg} alt="no post film" />}
                <span>{item.title}</span>
                <button className="primary-btn" onClick={(e) =>  setSelectedFilm(item)} >See more</button>
            </div>

                : null))}
            
            {selectedFilm ? 
                
            <div className="film-modal-backdrop">
                <div className="content-modal">
                    <h3>{selectedFilm.title}</h3>
                    <p>{selectedFilm.overview}</p>
                    <span>Release date: {selectedFilm.release_date}</span>
                    {<button className="btn-outline" onClick={(e) => setSelectedFilm(null)}>Back</button>}
                    {<button className="secondary-btn" onClick={(e) =>  [handleSentiment(selectedFilm.id), setSelectedFilm(null)]} >Show sentiment</button>}
                </div>        
            </div> 
            : null}                     
        </section>
        
        
    )
}

export default ChooseFilm