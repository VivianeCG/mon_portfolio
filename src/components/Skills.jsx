import data from "../assets/jsonfiles/skills.json";

function Skills() {
    return(
        <section id="skills">
            <h2>Compétences</h2>
            <article className="skills">
                {data.map((item, id)=> (
                    <p key={id}>{item.content}</p>
                ))}
            </article>
        </section>
    )
}

export default Skills;