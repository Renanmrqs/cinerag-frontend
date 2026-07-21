import { useState } from 'react';
import NavBar from '../components/NavBar'
import { useFilmSearch } from '../hooks/useFilmSearch';
import ChooseFilm from '../components/ChooseFilm';
import { useFilmSentiment } from '../hooks/useFilmSentiment';
import { SeeSentimentFilm } from '../components/SeeSentimentFilm';
import Spinner from "../components/Spinner.jsx"

function SearchFilms() {
    
    const { sentimentTrigger, sentimentItem, handleSentiment, isLoadingSentiment, setSentimentTrigger } = useFilmSentiment()
    const { film, send, searchedUser, setFilm, handleFilm, isLoading } = useFilmSearch()
    

    return (
        <main>
            <NavBar></NavBar>
            <section className='section-search'>
                <form  className='form-search-film'  onSubmit={(event) => handleFilm(event)}>
                    <label htmlFor="search">Search filme</label>
                    <input id='search' value={film} type="text" required onChange={(e) => setFilm(e.target.value)}/>
                    <input className='secondary-btn submit-auth' type="submit"/>              
                </form>
                <Spinner loading={isLoading}></Spinner>
            </section>
            {send ? <ChooseFilm item={searchedUser} handleSentiment={handleSentiment} ></ChooseFilm> :
            null}
            {sentimentTrigger ? <SeeSentimentFilm sentimentReview={sentimentItem} onClose={setSentimentTrigger} ></SeeSentimentFilm> :
            null
            }
            <Spinner loading={isLoadingSentiment}></Spinner>
        </main>
    )
}

export default SearchFilms