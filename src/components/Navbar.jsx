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
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <nav className="navbar">
            <div className="responsive-menu">
                {/* Bouton Burger, toujours visible en responsive */}
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
                    <li className="menu-item"><Link to='/' onClick={closeMenu}>Viviane Chenet</Link></li>
                    <li className="menu-item"><a href="#introduction" onClick={closeMenu}>Présentation</a></li>
                    <li className="menu-item"><a href="#skills" onClick={closeMenu}>Compétences</a></li>
                    <li className="menu-item"><a href="#techs" onClick={closeMenu}>Technologies</a></li>
                    <li className="menu-item"><a href="#projects" onClick={closeMenu}>Réalisations</a></li>
                    <li className="menu-item"><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

