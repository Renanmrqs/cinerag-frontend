# CineRAG Analytics — Frontend

Interface web da plataforma CineRAG Analytics — um app de análise de sentimentos de filmes com assistente de IA integrado. Construído em HTML, CSS e JavaScript vanilla, sem frameworks.

🔗 **[Acesse o projeto ao vivo](https://cinerag-analytics.vercel.app)**  
🔗 **[Repositório da API](https://github.com/Renanmrqs/cinerag-api)**

---

## Funcionalidades

- Autenticação com login e registro de usuário
- Login social via Google OAuth2 (Ajustes)
- Busca de filmes integrada à API do TMDB
- Cards com flip 3D — frente exibe o título, verso exibe overview, data e botões de ação
- Análise de sentimento por filme — badge colorido (positive / negative / mixed) e barra de confiança
- Sistema de favoritos com adição e remoção de filmes
- Página de favoritos com estatísticas individuais por filme
- Chat flutuante CineAI em todas as páginas via WebSocket
- Comandos rápidos no chat (`/positives`, `/negatives`, `/most trusted`, etc.)
- Respostas abertas processadas pelo Google Gemini com contexto dos favoritos do usuário

---

## Stack

- **HTML5** — estrutura semântica
- **CSS3** — estilização manual, flip card 3D, layout responsivo com Flexbox
- **JavaScript Vanilla** — fetch API, DOM manipulation, WebSocket nativo do browser
- **WebSocket API** — chat em tempo real sem biblioteca externa

---

## Estrutura

```
├── index.html          # Página de login e registro
├── home.html           # Busca de filmes e análise de sentimento
├── favorites.html      # Lista de favoritos do usuário
├── css/
│   └── style.css       # Estilos globais
└── js/
    ├── auth.js         # Login, registro e Google OAuth
    ├── app.js          # Busca de filmes, flip cards e sentimento
    ├── fav.js          # Favoritos — listagem e remoção
    ├── chat.js         # Chat flutuante CineAI via WebSocket
    └── logout.js       # Logout com invalidação de token
```

---

## Como rodar localmente

Não requer build. Basta servir os arquivos estáticos:

```bash
# Clone o repositório
git clone https://github.com/Renanmrqs/cinerag-frontend.git
cd cinerag-frontend

# Sirva com qualquer servidor estático
# Opção 1 — VS Code Live Server (recomendado)
# Opção 2 — Python
python -m http.server 5500
```

Acesse `http://127.0.0.1:5500/index.html`

A API precisa estar rodando localmente ou apontar para o deploy no Render. Para apontar para o deploy, as URLs nos arquivos JS já estão configuradas para `https://cinerag-api.onrender.com`.

---

## Chat CineAI — Comandos disponíveis

| Comando | Descrição |
|---------|-----------|
| `/positives` | Filmes positivos nos favoritos |
| `/negatives` | Filmes negativos nos favoritos |
| `/mixeds` | Filmes mistos nos favoritos |
| `/most trusted` | Filme com maior confiança |
| `/smaller trusted` | Filme com menor confiança |
| `/count films` | Total de favoritos |
| `/first film added` | Primeiro favorito adicionado |
| `/last film added` | Último favorito adicionado |
| Qualquer outra mensagem | Respondido pelo Gemini com contexto dos seus favoritos |

---

## Projetos relacionados

- [CineRAG API](https://github.com/Renanmrqs/cinerag-api) — backend FastAPI + WebSocket + Gemini
- [SentimentAI](https://github.com/Renanmrqs/SentimentAI) — modelo de ML próprio usado na análise

---

## Autor

**Renan Fernandes Marques**

[LinkedIn](https://linkedin.com/in/renan-marques-dev-python) · [GitHub](https://github.com/Renanmrqs)