import Navbar from "./Navbar.jsx";
import Banner from "./Banner.jsx";
import photo from "../assets/photos/banner_photo.webp";
import linkedin from "../assets/icons/32px/linkedin-color-32.png"
import githublogo from "../assets/icons/32px/github-32.png"



function Header() {
    return(
        <header className="header">
            <Navbar/>
            <Banner src={photo}>
                <figcaption className="banner-figcaption">
                    <h1>Viviane CHENET développeuse web à BREST </h1>
                    <div className="header-logos"><a href="https://www.linkedin.com/in/chenet-viviane"><img src={linkedin} alt="logo et lien vers LinkedIn" /></a><a href="https://github.com/VivianeCG"><img src={githublogo} alt="logo et lien vers github" /></a></div>
                </figcaption>
            </Banner>

        </header>
    )
}

export default Header;