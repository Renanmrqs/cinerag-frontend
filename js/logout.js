
function logout() {

    
    const lgt = document.querySelector("#logout")

    lgt.addEventListener('click', async (e) => {
        e.preventDefault()
        console.log('ok')
        
        const res = await fetch("https://cinerag-api.onrender.com/auth/logout", {
        method: 'POST',
        headers: { "Authorization": `bearer ${token}` }
        })
        
        const data = await res.json()
        
        console.log(data)
        if (res.status === 200) {
            localStorage.removeItem('access_token')
            localStorage.removeItem('user_id')
            window.location.href = 'index.html'
        } 
    })
}

logout()