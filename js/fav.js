const token = localStorage.getItem('access_token')
if (!token) {
    window.location.href = 'index.html'
}


async function show_favorites () {
    const res = await fetch('http://127.0.0.1:8000/films/favorites/get_all' , {
            method: 'GET',
            headers: {"Authorization": `bearer ${token}`}
        }
    )
    const data = await res.json()
    console.log(data)
    const favs_panel = document.querySelector('#favorites-panel') 

    data.forEach(fav => {
        const fav_card = document.createElement("div")
        fav_card.classList.add("fav-card")

        fav_card.innerHTML = `
        <h2>${fav.title}</h2>

        <span class="badge ${fav.sentiment}">
        ${fav.sentiment} reviews
        </span>

        <p>Trust: ${(fav.trust * 100).toFixed(0)}%</p>
        <div class="trust-bar">
            <div class="trust-fill" style="width: ${fav.trust * 100}%"></div>
        </div>

        <span id="date" >Added on: ${fav.added_at}</span> 
        <hr>
        `

        favs_panel.append(fav_card)
    });

}

show_favorites()
console.log(token)