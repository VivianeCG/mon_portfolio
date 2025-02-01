import reactLogo from "../assets/icons/32px/react-32.png"
import email from "../assets/icons/32px/email-32.png"
import linkedin from "../assets/icons/32px/linkedin-color-32.png"
import github from "../assets/icons/32px/github-32.png"
import { Link } from "react-router-dom"

function Footer({src}) {
    return(
       <footer>
        <p className="footer-content">
            Made with React <img src={reactLogo} alt="logo React"></img>.<br/>
            © Chenet Viviane - 2025.<br/>
            <a href="mailto:chenet.viviane@gmail.com"><img src={email} alt="lien pour envoyer un e-mail" /></a><img src={linkedin} alt="logo LinkedIn" /><img src={github} alt="logo GitHub" /><br/>
            <Link to='/mentionslegales'>Mentions légales</Link>
        </p>
       </footer>
    )
}

export default Footer;