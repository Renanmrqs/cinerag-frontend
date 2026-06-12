const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token')

if (!token) {
    window.location.href = 'index.html';
}

function catching_register () {
    const password_user = document.querySelector('#password_register')
    const username_user = document.querySelector('#username')
    
    const payloadBase64 = token.split('.')[1];
    const payloadDecodified = JSON.parse(atob(payloadBase64));
    localStorage.setItem('user_id', payloadDecodified.sub);
    localStorage.setItem('username', username_user.value);

    document.querySelector('#register').addEventListener('submit', async (e) => {
        e.preventDefault()
        
        const username = username_user.value
        const password = password_user.value
        
        const body = {"username": username,
                    "password": password,
                    'id': payloadDecodified.sub
        }

        const res = await fetch("https://cinerag-api.onrender.com/auth/complete-profile", {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })

        const data = await res.json()
        
        if (res.ok && data.message === `user ${username} updated`) {
            localStorage.setItem('access_token', data.access_token)
            window.location.href = 'home.html';
    } else {
        document.querySelector('#res_register').innerHTML = `<h3>ERROR: ${data.detail}</h3>`
        }
        
        

    })


}




catching_register()