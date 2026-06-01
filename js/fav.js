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
}

show_favorites()
console.log(token)