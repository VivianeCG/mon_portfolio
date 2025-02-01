import { Link } from "react-router-dom"

function Navbar() {
    return(
        <nav className="navbar">
            <ul>
                <li className="menu-item"><Link to='/'>Viviane C</Link></li>
                <li className="menu-item"><a href="#introduction">Présentation</a></li>
                <li className="menu-item"><a href="#skills">Compétences</a></li>
                <li className="menu-item"><a href="#techs">Technologies</a></li>
                <li className="menu-item"><a href="#projects">Réalisations</a></li>
                <li className="menu-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;