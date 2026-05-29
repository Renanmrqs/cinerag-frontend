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
        const res_div = document.querySelector('#grid')
        res_div.innerHTML = ''
        data.forEach(film => {
            const res_element = document.createElement("p")
            res_element.textContent = `${film.title}`
            res_div.append(res_element)
        });
        
    })
    
}




catching_film()
