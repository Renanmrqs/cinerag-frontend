function catching_login() {
    const password_user = document.querySelector('#password')
    const identify_user = document.querySelector('#identify')
    const btn = document.querySelector('.btn')
    btn.addEventListener('click', async (e) => {
        e.preventDefault()
        const user = identify_user.value
        const password = password_user.value
        
        const formData = new FormData()
        formData.append('username', user)
        formData.append('password', password)

        const res = await fetch("http://127.0.0.1:8000/auth/login", {
            method: 'POST',
            body: formData
        })
        const data = await res.json()
        

        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('user_id', data.user_id)
        // window.location.href = 'home.html'
        console.log(data)
    })

}
// const identify_user =

function catching_register() {
    const password_user = document.querySelector('#password_register')
    const username_user = document.querySelector('#username')
    const email_user = document.querySelector('#email')
    const btn = document.querySelector('.btn_register')
    
    btn.addEventListener('click', async (e) => {
        e.preventDefault()
        const username = username_user.value
        const email = email_user.value
        const password = password_user.value
        
        const body = {"username": username,
            "password": password,
            "email": email
        }

        const res = await fetch("http://127.0.0.1:8000/auth/register", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        const data = await res.json()
        if (data.message === `user ${username} registred`) {
        document.querySelector('#res_register').innerHTML = '<h3>Registred with succesfull</h3>'
        
    }
        console.log(data)
        // window.location.href = 'home.html'
    })

}

function toggle() {

}
catching_register()
// catching_login()