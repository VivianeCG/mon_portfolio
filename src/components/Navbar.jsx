import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import burger from "../assets/icons/32px/menu-color-32.png";
import cross from "../assets/icons/32px/cross-color-32.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="responsive-menu">
                {/* Bouton Burger toujours visible */}
                <button className="burger-icon-button" onClick={toggleMenu}>
                    <img 
                        src={isMenuOpen ? cross : burger} 
                        alt={isMenuOpen ? "fermer le menu" : "accès au menu"} 
                        className="burger-icon" 
                    />
                </button>

                {/* Menu, caché par défaut en responsive */}
                <ul className={classNames("navbar", { 
                    "open-navbar": isMenuOpen,
                    "closed-navbar": !isMenuOpen,
                    "visible": isMenuOpen,
                    "hidden": !isMenuOpen 
                })}>
                    <li className="menu-item"><Link to='/'>Viviane Chenet</Link></li>
                    <li className="menu-item"><a href="#introduction">Présentation</a></li>
                    <li className="menu-item"><a href="#skills">Compétences</a></li>
                    <li className="menu-item"><a href="#techs">Technologies</a></li>
                    <li className="menu-item"><a href="#projects">Réalisations</a></li>
                    <li className="menu-item"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

