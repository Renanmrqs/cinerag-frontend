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

let ws = null

}
function connect_ws () {
    ws = new WebSocket(`ws://127.0.0.1:8000/ws?token=${token}`)

    ws.onopen = () => {
        console.log('conectado')
        chat = document.querySelector('#chat-msg')
        const help = document.createElement('div')
        help.classList.add('chat-answer')
        help.innerHTML = `
        Hi! i'm the CineAI and i'm here for helping you!<br>
        available commands:<br>
        /positives - Show all positive movies<br>
        /negatives - Show all negative movies<br>
        /mixeds - Show all mixed movies<br>
        /most trusted - Show most trusted confidence film<br>
        /smaller trusted - Show smaller trusted film<br>
        /count films - Count all films on favs<br>
        /first film added - First added film on favs<br>
        /last film added - Last film added on favs
        `
        chat.append(help)
    }
     
    
    

    ws.onmessage = (event) => {
        console.log(`answer: ${event.data}`)
        chat = document.querySelector('#chat-msg')
        div_chat_answer = document.createElement("div")
        div_chat_answer.classList.add("chat-answer")
        div_chat_answer.innerHTML = `${event.data}`
        chat.append(div_chat_answer)

    }
}

function send_msg_ws() {
    chat = document.querySelector('#chat-msg')
    text_user = document.querySelector("#text-user")


    document.querySelector("#send-btn-chat").addEventListener('click', (e) => {
        e.preventDefault()
        div_user_question = document.createElement("div")
        div_user_question.classList.add("input-user-chat")
        div_user_question.innerHTML = `${text_user.value}`
        chat.append(div_user_question)
        
        ws.send(text_user.value)
        text_user.value = ''
  
    })
}

function toggle_chat () {
    chat_panel = document.querySelector("#chat")
    chat_btn = document.querySelector("#chat-btn")
    inside_chat = document.querySelector("#inside-chat-btn")
    chat_btn.hidden = false
    chat_btn.addEventListener('click', (e) => {
        chat_panel.style.display = 'flex'
        connect_ws()
        chat_btn.hidden = true
    })
    
    inside_chat.addEventListener('click', (e) => {
        console.log("click")
        chat_panel.style.display = 'none'
        chat_btn.hidden = false
        chat = document.querySelector('#chat-msg')
        chat.innerHTML = ''
    })
    
}

send_msg_ws()
show_favorites()
toggle_chat()