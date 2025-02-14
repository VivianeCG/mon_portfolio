import data from '../assets/jsonfiles/projects.json';
import Card from './Card';

function Projects() {
        // Trier les projets par ordre décroissant de l'id
        const sortedData = [...data].sort((a, b) => b.id - a.id);
    return(
        <section id="projects">
            <h2>Réalisations</h2>
            <div className='projects-cards'>
                {sortedData.map((projects) => {
                    let imageSrc;
                    try {
                        imageSrc = require(`../assets/projectsphotos/${projects.src}`);
                    } catch (error) {
                        console.error(`Image non trouvée : ${projects.src}`, error);
                        imageSrc = '';
                    }
                
                return (
                    <Card
                    key={projects.id}
                    src={imageSrc}
                    alt={projects.alt}>
                    <h3 className='card-title'>{projects.title}</h3>
                    </Card>
                );
                })}
            </div>
        </section>
    )
}

export default Projects;