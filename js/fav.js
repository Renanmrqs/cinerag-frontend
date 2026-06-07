async function show_favorites () {
    const res = await fetch('http://127.0.0.1:8000/films/favorites/get_all' , {
            method: 'GET',
            headers: {"Authorization": `bearer ${token}`}
        }
    )
    const data = await res.json()
    console.log(data)
    const favs_panel = document.querySelector('#favorites-panel') 
    
    if (data.length === 0) {
        const fav_card = document.createElement("div")
        fav_card.classList.add("fav-card")
        fav_card.innerHTML = `
            <h2>Pleas, Add films to see this page!</h2>
            `
        favs_panel.append(fav_card)
    } else {
        data.forEach(fav => {
            const fav_card = document.createElement("div")
            fav_card.classList.add("fav-card")
            const del_btn = document.createElement("button")
            del_btn.classList.add('del-btn')
            
            del_btn.textContent = '🗑'
            
            del_btn.onclick = () => del_favorite(fav.id)

            fav_card.innerHTML = `
            <h2>${fav.title}</h2>

            <span class="badge ${fav.sentiment}">
            ${fav.sentiment} reviews
            </span>

            <p>Trust: ${(fav.trust * 100).toFixed(0)}%</p>
            <div class="trust-bar">
                <div class="trust-fill" style="width: ${fav.trust * 100}%"></div>
            </div>

            <span id="date" >Added on: ${new Date(fav.added_at).toLocaleDateString('pt-BR')}</span> 
            <hr>
            `

            favs_panel.append(fav_card)
            favs_panel.append(del_btn)
        });
}}

async function del_favorite (id) {
    const body = {'id': id}
    const res = await fetch(`http://127.0.0.1:8000/films/favorites/del_fav?id=${id}` , {
            method: 'DELETE',
            headers: {"Authorization": `bearer ${token}`}
        }
    )
    const favs_panel = document.querySelector('#favorites-panel')
    favs_panel.innerHTML = ''
    show_favorites()
}

show_favorites()
