import { useState } from "react";
import copy from "../assets/icons/32px/copy-32.png";
import copy16 from "../assets/icons/16px/copy-16.png";
import check from "../assets/icons/32px/checkmark-32.png";
import check16 from "../assets/icons/16px/checkmark-16.png";

function Contactform() {
    const [copied, setCopied] = useState(false);
    const email = "chenet.viviane@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Réinitialisation après 2 sec
            })
            .catch(err => console.error("Erreur de copie : ", err));
    };

    return (
        <section id="contact">
            <h2>Contact</h2>
            <div className="contact-elements">
                <p className="mailto">
                    <a href={`mailto:${email}`} className="mailto-link">Envoyer un e-mail</a>
                </p>
                <p className="copy-mail">
                    {email}
                    <button className="copy-mail-button" onClick={copyToClipboard}>
                        <img src={copied ? check : copy} alt={copied ? "Copié!" : "bouton pour copier l'e-mail"} className="copy-icon" />
                        <img src={copied ? check16 : copy16} alt={copied ?"Copié!" : "bouton pour copier l'e-mail"} className="copy-icon-mobile" />
                    </button>
                </p>
            </div>
        </section>
    );
}

export default Contactform;
