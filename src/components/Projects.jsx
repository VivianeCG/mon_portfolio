import data from '@json/projects.json';
import Card from '@layout/Card.jsx';

function Projects() {
        // Trier les projets par ordre décroissant de l'id
        const sortedData = [...data].sort((a, b) => b.id - a.id);
    return(
        <section id="projects">
            <h2>Réalisations</h2>
            <div className='projects-cards'>
                {sortedData.map((projects) =>(
                    <Card
                    key={projects.id}
                    src={projects.src}
                    alt={projects.alt}>
                    <h3>{projects.title}</h3>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Projects;