function catching_register () {
    const password_user = document.querySelector('#password_register')
    const username_user = document.querySelector('#username')
    
    document.querySelector('#register').addEventListener('submit', async (e) => {
        e.preventDefault()
        const username = username_user.value
        const password = password_user.value
        const id = handle_google()
        const body = {"username": username,
                    "password": password,
                    'id': id
        }

        const res = await fetch("https://cinerag-api.onrender.com/auth/complete-profile", {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        
        const data = await res.json()
        
        if (data.message === `user ${username} updated`) {
        document.querySelector('#res_register').innerHTML = '<h3>Registred with succesfull</h3>'
        } else {
        document.querySelector('#res_register').innerHTML = `<h3>ERROR: ${data.detail}</h3>`
        }
        
        window.history.replaceState({}, document.title, window.location.pathname);
        window.location.href = 'home.html';
    })


}




function handle_google () {
    const urlParams= new URLSearchParams(window.location.search);
    const token = urlParams.get('token')
    
    console.log("URL atual:", window.location.href); // VEJA O QUE ESTÁ NA URL
    console.log("Token capturado:", token); // VEJA SE ELE REALMENTE ACHA O TOKEN
    
    localStorage.setItem('access_token', token)
    
    const payloadBase64 = token.split('.')[1];
    const payloadDecodified = JSON.parse(atob(payloadBase64));
    localStorage.setItem('user_id', payloadDecodified.sub)
    return payloadDecodified.sub

    
}

catching_register()