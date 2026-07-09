function navBar ({}) {
    return (
        <header className="navbar">
            <nav class="nav">
            <a href="/index.html" class="logo">
            {/* <img src="img/cinerag_logo.png" alt="CineRag" height="50" <img/> */}
            </a>
            <ul class="nav-list">
                <li><a href="/home.html">Home</a></li>
                <li><a href="/favorites.html">Favorites</a></li>
                <li> <button id="logout">Logout</button> </li>
            </ul>
            </nav>
        </header>
        
    )
}

export default navBar