const token = localStorage.getItem('access_token')
if (!token) {
    window.location.href = 'index.html'
}

function catching_film () {
    const user_search = document.querySelector('#search')

    document.querySelector('#search-btn').addEventListener('click', async (e) => {
        e.preventDefault()

        console.log(user_search.value)
        const res = await fetch(`http://127.0.0.1:8000/films/search_film/${user_search.value}`, {
            method: 'GET',
            headers: {"Authorization": `bearer ${token}`}
            }
        )
        const data = await res.json()
        user_search.value = ''
        const res_div = document.querySelector('#results')
        res_div.innerHTML = ''
        data.forEach(film => {
            const film_card = document.createElement("div")
            film_card.classList.add('film-card')
            
            const card_inner = document.createElement("div")
            card_inner.classList.add('card-inner')

            const card_front = document.createElement("div")
            card_front.classList.add('card-front')
            card_front.innerHTML = `<p>${film.title}</p>`
            
            const card_back = document.createElement("div")
            card_back.classList.add('card-back')
            card_back.innerHTML = `
            <h3>${film.title}</h3>
            <p>${film.overview}</p>
            <span>${film.release_date}</span>`
            const btn_sentiment = document.createElement('button')
            btn_sentiment.classList.add('btn-sentiment')
            btn_sentiment.textContent = 'See Sentiment'
            btn_sentiment.onclick = () => get_sentiment(film.id, film.title)
            card_inner.append(card_front, card_back)
            film_card.append(card_inner)
            res_div.append(film_card)
            card_back.append(btn_sentiment)

        });
        
    })
    
}

async function get_sentiment (film_id, title) {
    const res = await fetch (`http://127.0.0.1:8000/films/get_score/${film_id}`, {
        method: 'GET',
        headers: {"Authorization": `bearer ${token}`}
        }
    )
    const data = await res.json()
    console.log(data)
    const sentiment_panel = document.querySelector('#sentiment-panel')
    const film_sentiment = document.createElement('div')
    film_sentiment.innerHTML = `<h2>${title}</h2>
    
    <span class="badge ${data.sentiment}"> 
    ${data.sentiment} reviews
    </span>
    
    <p>Trust: ${(data.trust * 100).toFixed(0)}%</p>
    <div class="trust-bar">
        <div class="trust-fill" style="width: ${data.trust * 100}%"></div>
    </div>

    <div class="reviews">
    Film Reviews: ${data.sample_reviews.length > 0 
    ? data.sample_reviews.map(review => `<p>${review}</p>`).join('') 
    : '<p>No reviews for this film</p>'}
    </div>
    `
    sentiment_panel.innerHTML = ''
    sentiment_panel.append(film_sentiment)
    sentiment_panel.removeAttribute('hidden') 
    //{sentiment: 'mixed', trust: 0, title: 'Toy Story 5', sample_reviews: Array(0)}
}


catching_film()
