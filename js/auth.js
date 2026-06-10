const token = localStorage.getItem('access_token')
if (token) {
    window.location.href = 'home.html'
}

function catching_login() {
    const password_user = document.querySelector('#password')
    const identify_user = document.querySelector('#identify')
    
    
    document.querySelector('#login').addEventListener('submit', async (e) => {
        e.preventDefault()
        const user = identify_user.value
        const password = password_user.value
        
        const formData = new FormData()
        formData.append('username', user)
        formData.append('password', password)

        const res = await fetch("https://cinerag-api.onrender.com/auth/login", {
            method: 'POST',
            body: formData
        })
        const data = await res.json()


        if (res.status === 200) {
            localStorage.setItem('access_token', data.access_token)
            localStorage.setItem('user_id', data.user_id)
            window.location.href = 'home.html'
        }
        else {
            document.querySelector('#res_login').innerHTML = `<h3>ERROR: ${data.detail}</h3>`
        }

        console.log(data)



    })

}


function catching_register() {
    const password_user = document.querySelector('#password_register')
    const username_user = document.querySelector('#username')
    const email_user = document.querySelector('#email')
    
    document.querySelector('#register').addEventListener('submit', async (e) => {
        e.preventDefault()
        const username = username_user.value
        const email = email_user.value
        const password = password_user.value
        
        const body = {"username": username,
            "password": password,
            "email": email
        }

        const res = await fetch("https://cinerag-api.onrender.com/auth/register", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        const data = await res.json()
        if (data.message === `user ${username} registred`) {
        document.querySelector('#res_register').innerHTML = '<h3>Registred with succesfull</h3>'
        } else {
        document.querySelector('#res_register').innerHTML = `<h3>ERROR: ${data.detail}</h3>`
        }
       
    })

}

function toggle() {
    const link_login = document.querySelector('#link_login')
    const link_register = document.querySelector('#link_register')
    
    link_login.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('#login').hidden = true
        document.querySelector('#register').hidden = false
    })

    link_register.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('#register').hidden = true
    document.querySelector('#login').hidden = false
    })
}

function catching_google() {
    document.querySelector('#login_google').addEventListener('click', (e) => {
    window.location.href = "https://cinerag-api.onrender.com/auth/google"
    
})
    document.querySelector('#register_google').addEventListener('click', (e) => {
        window.location.href = "https://cinerag-api.onrender.com/auth/google"

    })
}

function handle_google () {
    const urlParams= new URLSearchParams(window.location.search);
    const token = urlParams.get('token')
    
    console.log("URL atual:", window.location.href); // VEJA O QUE ESTÁ NA URL
    console.log("Token capturado:", token); // VEJA SE ELE REALMENTE ACHA O TOKEN


    if (token) {
        localStorage.setItem('access_token', token)
        
        const payloadBase64 = token.split('.')[1];
        const payloadDecodified = JSON.parse(atob(payloadBase64));

        localStorage.setItem('user_id', payloadDecodified.sub)
        
        window.history.replaceState({}, document.title, window.location.pathname);
        window.location.href = 'home.html';
    }
}

catching_register()
catching_login()
catching_google()
handle_google()
toggle()
