import copy from "../assets/icons/32px/copy-32.png"

function Contactform() {
    return(
        <section id="contact">
            <h2>Contact</h2>
            <div className="contact-elements">
                <p><a href="mailto:chenet.viviane@gmail.com">Contactez-moi !</a></p>
                <p>chenet.viviane@gmail.com <button><img src={copy} alt="" /></button></p>
            </div>
        </section>
    )
}

export default Contactform;