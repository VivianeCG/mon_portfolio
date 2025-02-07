import Contactform from "../components/Contactform.jsx";
import Header from "../components/Header.jsx";
import Introduction from "../components/Introduction.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Techs from "../components/Techs.jsx";

function Home() {
    return (
        <>
        <Header/>
        <main className="main-container">
        <Introduction/>
        <Skills/>
        <Techs/>
        </main>
        </>
            )
};
export default Home;