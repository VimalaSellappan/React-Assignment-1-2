// popup.jsx
import './popup.css';

function Popup({ project_details, onClose }) {
  if (!project_details) return null;

  const { name, screenshot, repo, tech, description, learning, role, challenges } = project_details;

  return (
    <div className="popup" onClick={onClose}>
      <div className="popup_content" onClick={(e) => e.stopPropagation()}>
        <button className="close_button" onClick={onClose}>×</button>
        <h2>{name}</h2>
        <img src={screenshot} alt={name} width="100%" />
        <p><strong>GitHub:</strong> <a href={repo} target="_blank" rel="noopener noreferrer">{repo}</a></p>
        <p><strong>Tech used:</strong> {tech}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>What I learned:</strong> {learning}</p>
        <p><strong>My role:</strong> {role}</p>
        <p><strong>Challenges solved:</strong> {challenges}</p>
      </div>
    </div>
  );
}

export default Popup;
