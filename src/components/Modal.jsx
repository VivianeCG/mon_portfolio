import githubicon from "../assets/icons/32px/github-32.png";

function Modal({description, github, onClose}) {
    return(
        <aside className="modal-overlay" role="dialog" aria-hidden="false">
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-button" onClick={onClose}>X</button>
                <p className="project-description">{description}</p>
                <p className="repo-link"><a href={github} target="_blank" rel="noopener noreferrer"><img src={githubicon} alt="lien vers repo GitHub" /></a></p>
            </div>
        </aside>
    )
}
export default Modal;