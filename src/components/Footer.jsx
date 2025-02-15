import reactLogo from "../assets/icons/32px/react-32.png"
import email from "../assets/icons/32px/email-32.png"
import linkedin from "../assets/icons/32px/linkedin-color-32.png"
import github from "../assets/icons/32px/github-32.png"
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