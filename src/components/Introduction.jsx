import photo from "@photos/portrait.webp"
import data from "@json/introduction.json"

function Introduction() {
    return(
        <section id="introduction">
            <figure>
                <img src={photo} alt="portrait de Viviane"/>
            </figure>
            <div className="content">
                <h2>Présentation</h2>
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