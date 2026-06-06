const token = localStorage.getItem('access_token')

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
toggle_chat()
send_msg_ws()