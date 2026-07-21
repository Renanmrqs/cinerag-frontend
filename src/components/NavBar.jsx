import { Link } from "react-router-dom"



function NavBar ({}) {
    return (
        <header className="navbar">
            <nav className="nav">
            <a href="/index.html" className="logo">
            {/* <img src="img/cinerag_logo.png" alt="CineRag" height="50" <img/> */}
            </a>
            <ul className="nav-list">
                <li> <Link to={'/home'}>Search Films</Link> </li>
                <li> <Link to={'/favorites'}>Favorites</Link> </li>
                <li> <Link to={'/dashboard'}>Dashboard</Link> </li>
                <li> <button id="logout">Logout</button> </li>
            </ul>
            </nav>
        </header>
        
    )
}

export default NavBar