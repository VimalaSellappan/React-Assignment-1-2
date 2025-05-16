// src/components/ProjectCard.jsx
function ProjectCard({ name, screenshot, repo, tech, description, role, challenges, learning, onClick,}) {
    return (
      <div className="project-card" onClick={onClick}>
        <h2>{name}</h2>
        <img src={screenshot} alt={`${name} screenshot`} width="300" />
        {repo && (
          <p><strong>GitHub:</strong> <a href={repo} target="_blank" rel="noopener noreferrer">{repo}</a></p>
        )}
        {tech && <p><strong>Tech used:</strong> {tech}</p>}
      {description && <p><strong>Description:</strong> {description}</p>}
      {learning && <p><strong>What I learned:</strong> {learning}</p>}
      {role && <p><strong>My role:</strong> {role}</p>}
      {challenges && <p><strong>Challenges solved:</strong> {challenges}</p>}
      </div>
    );
  }
  
  export default ProjectCard;
  