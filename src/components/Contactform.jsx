import copy from "../assets/icons/32px/copy-32.png"


function Contactform() {
    return(
        <section id="contact">
            <h2>Contact</h2>
            <div className="contact-elements">
                <p className="mailto"><a href="mailto:chenet.viviane@gmail.com" className="mailto-link">Envoyer un e-mail </a></p>
                <p className="copy-mail">chenet.viviane@gmail.com <button className="copy-mail-button"><img src={copy} alt="bouton pour copier l'e-mail" /></button></p>
            </div>
        </section>
    )
}

export default Contactform;