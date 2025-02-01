import htmlicon from "../assets/icons/96px/html-96.png"
import cssicon from "../assets/icons/96px/css-96.png"
import javascript from "../assets/icons/96px/javascript-96.png"
import nodejs from "../assets/icons/96px/nodejs-96.png"
import reacticon from "../assets/icons/96px/react-96.png"
import viteicon from "../assets/icons/96px/vite-96.png"
import mongodbicon from "../assets/icons/96px/mongo-db-96.png"
import sassicon from "../assets/icons/96px/sass-96.png"
import trello from "../assets/icons/96px/trello-96.png"
import github from "../assets/icons/96px/github-96.png"

function Techs() {
    return(
        <section id="techs">
            <h2>Technologies</h2>
            <div className="techs-content">
                <article><p>HTML</p><img src={htmlicon} alt="logo HTML" /></article>
                <article><p>CSS</p><img src={cssicon} alt="logo CSS" /></article>
                <article><p>JavaScript</p><img src={javascript} alt="logo JavaScript" /></article>
                <article><p>NodeJs</p><img src={nodejs} alt="logo NodeJs" /></article>
                <article><p>React</p><img src={reacticon} alt="logo React" /></article>
                <article><p>Vite</p><img src={viteicon} alt="logo Vite" /></article>
                <article><p>MongoDb</p><img src={mongodbicon} alt="logo MongoDb" /></article>
                <article><p>Sass</p><img src={sassicon} alt="logo Sass" /></article>
                <article><p>Trello</p><img src={trello} alt="logo Trello" /></article>
                <article><p>GitHub</p><img src={github} alt="logo GitHub" /></article>    
            </div>
        </section>
    )
}

export default Techs;