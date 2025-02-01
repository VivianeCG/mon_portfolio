import Navbar from "./Navbar.jsx";
import Banner from "./Banner.jsx";
import photo from "../assets/photos/banner_photo.webp";
import linkedin from "../assets/icons/32px/linkedin-color-32.png"
import githublogo from "../assets/icons/32px/github-32.png"



function Header() {
    return(
        <header>
            <Navbar/>
            <Banner src={photo}>
                <figcaption>
                    <h1>Viviane CHENET développeuse web à BREST </h1>
                    <div className="header-logos"><img src={linkedin} alt="logo et lien vers LinkedIn" /><img src={githublogo} alt="logo et lien vers github" /></div>
                </figcaption>
            </Banner>

        </header>
    )
}

export default Header;