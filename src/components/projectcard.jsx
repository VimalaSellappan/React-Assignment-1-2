// src/components/ProjectCard.jsx
function ProjectCard({ name, screenshot, tech,onClick,}) {
    return (
      <div className="project-card" onClick={onClick}>
        <h2>{name}</h2>
        <img src={screenshot} alt={`${name} screenshot`} width="300" />
        {tech && <p><strong>Tech used:</strong> {tech}</p>}
        <button style={{
          marginTop: '10px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          justifyContent:"center",
          }}>Click me to view more</button>
      </div>
    );
  }
  
  export default ProjectCard;
  