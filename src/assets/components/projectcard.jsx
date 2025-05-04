
function ProjectCard({ name, screenshot, repo, tech, description, role, challenges, learning }) {
    return (
      <div className="project-card">
        <h2>{name}</h2>
        <img src={screenshot} alt={`${name} screenshot`} width="300" />
        <p><strong>GitHub:</strong> <a href={repo} target="_blank">{repo}</a></p>
        <p><strong>Tech used:</strong> {tech}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>What I learned:</strong> {learning}</p>
        <p><strong>My role:</strong> {role}</p>
        <p><strong>Challenges solved:</strong> {challenges}</p>
      </div>
    );
  }
  
  export default ProjectCard;
  