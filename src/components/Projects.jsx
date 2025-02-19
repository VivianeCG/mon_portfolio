import { useState } from "react";
import data from '../assets/jsonfiles/projects.json';
import Card from './Card';
import Modal from "./Modal";

function Projects() {
        // État pour gérer la modale
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedProject, setSelectedProject] = useState(null);
    
        // Fonction pour ouvrir la modale avec les données du projet cliqué
        const handleOpenModal = (project) => {
            setSelectedProject(project);
            setIsModalOpen(true);
        };
    
        // Fonction pour fermer la modale
        const handleCloseModal = () => {
            setIsModalOpen(false);
            setSelectedProject(null);
        };

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
                    alt={projects.alt}
                    onClick={() => handleOpenModal(projects)}> 
                    <h3 className='card-title'>{projects.title}</h3>
                    </Card>
                );
            })}
            </div>
            {/* Affichage conditionnel de la modale */}
            {isModalOpen && selectedProject && (
                <Modal
                    description={selectedProject.description}
                    github={selectedProject.github}
                    onClose={handleCloseModal} // Ferme la modale au clic
                />
            )}
        </section>
    )
}

export default Projects;