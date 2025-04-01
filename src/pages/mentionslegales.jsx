import { Link } from "react-router-dom";


function mentionslegales() {
    return (
        <>
            <header className="ml-header"><Link to='/'>Viviane Chenet</Link></header>
            <main>
            <h1 className="ml-title">Mentions légales</h1>
                <article className="ml-content">
                    <h2 className="ml-subtitles">Propriétaire</h2>
                        <p className="ml-text"> Viviane Chenet <br/> 115 rue de l'hégoa<br/> 29280 Plouzané</p>
                    <h2 className="ml-subtitles">Hébergement du site</h2>
                        <p className="ml-text">Vercel Inc. <br/>440 N Barranca Avenue #4133 <br/>Covina, CA 91723<br/>United States</p>
                    <h2 className="ml-subtitles">Contact</h2>
                        <p className="ml-text">Vous pouvez me contacter par mail via ce lien: <a href="mailto:chenet.viviane@gmail.com" className="mailto-link"> Envoyer un e-mail </a></p>
                    <h2 className="ml-subtitles">Données personnelles</h2>
                        <p className="ml-text">Les données communiquées seront utilisées pour vous recontacter, mais ne seront pas enregistrées dans une base de données ni utilisées à des fins commerciales ou publicitaires.</p>
                    <h2 className="ml-subtitles">Propriété intellectuelle</h2>
                        <p className="ml-text">Crédit photo: moi-même.</p>
                        <p className="ml-text">Source icônes:<a href="https://icons8.com/icons"> https://icons8.com/icons</a>.</p>
                </article>
            </main>
        </>
    )
    
}

export default mentionslegales;