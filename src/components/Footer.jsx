import { Link } from "react-router-dom"

function Footer({src}) {
    return(
       <footer>
        <section >
            <p className="footer-content"><span>Made with React</span>© Chenet Viviane - 2025.<Link to='/mentionslegales'>Mentions légales</Link></p>
        </section>
       </footer>
    )
}

export default Footer;