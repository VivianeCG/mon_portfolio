import { Link } from "react-router-dom"
import burger from "../assets/icons/32px/menu-color-32.png"
import cross from "../assets/icons/32px/cross-color-32.png"

function Navbar() {
    return(
        <nav className="navbar ">
            <div className="responsive-menu">
                <img src={burger} alt="accès au menu" className="burger-icon" id="burger"/>
                <img src={cross} alt="fermer le menu" className="cross-icon-open-menu" id="cross"/>
            <ul>
                <li className="menu-item"><Link to='/'>Viviane Chenet</Link></li>
                <li className="menu-item"><a href="#introduction">Présentation</a></li>
                <li className="menu-item"><a href="#skills">Compétences</a></li>
                <li className="menu-item"><a href="#techs">Technologies</a></li>
                <li className="menu-item"><a href="#projects">Réalisations</a></li>
                <li className="menu-item"><a href="#contact">Contact</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;