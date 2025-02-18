import photo from "../assets/photos/portrait.webp";
import data from "../assets/jsonfiles/introduction.json";

function Introduction() {
    return(
        <section id="introduction">
            <h2>Présentation</h2>
            <div className="content">
                <figure>
                    <img src={photo} alt="portrait de Viviane"/>
                </figure>
                        <article>
                            {data.map((item, id)=> (
                                <p key={id} className="introduction-text">{item.content}</p>
                            ))}
                        </article>
            </div>
        </section>
    )
}

export default Introduction;