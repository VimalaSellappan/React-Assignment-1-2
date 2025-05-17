import {useState} from 'react';
import ProjectCard from "../components/projectcard";
import Popup from '../components/popup';
import './portfolio.css'; 


function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [DisplayProjects, setDisplayProjects] = useState(false);

  const projects = [
    {
      name:"Genesis Portfolio Design",
      screenshot:"images/image1.png",
      repo:"https://github.com/VimalaSellappan/Assignment-11",
      tech:"HTML, SASS",
      description:"Website with with three linked pages: Home, Projects, and Contact.Styled using Sass for modular, maintainable, and responsive design.",
      learning:"I learned how to build a multi-page website using only HTML and Sass.",
      role:"Solo project",
      challenges:"One of the main challenges was organizing the Sass files ensuring consistent styling across multiple pages, and making the navigation links work correctly.",
    },
    { 
      name:"BHROMAON - 12 hr Challenge",
      screenshot:"images/image2.png",
      repo:"https://github.com/VimalaSellappan/Assignment-14",
      tech:"HTML, CSS, Bootstrap",
      description:"BHROMAON is a responsive travel landing page built from a Figma design, featuring search functionality, destination highlights, and a testimonial section.",
      learning:"Converted given Figma into a responsive web page and gained experience with version control using Git, managing layout structure, styling components, and organizing commits within a set deadline.",
      role:"Solo project",
      challenges:"Positioning and layering issues and responsive design."
    },
    {
      name:"BAR141 website",
      screenshot:"images/image3.png",
      repo:"https://github.com/xOsitax/BarWebsite",
      tech:"HTML,CSS",
      description:"Website with with four linked pages. Styled using CSS and I was responsible for gallery page designed wit HTML and CSS.It features a fixed navigation bar, a colorful animated “Gallery” heading, a sophisticated CSS grid-based image gallery showcasing food and interiors, and a fully styled footer with location and contact details.",
      learning:"I learned media queries, fixed navigataion and CSS animations.",
      role:"Group project",
      challenges:"Aligned complex grid of images across multiple rows and columns and layout issues due to fixed nav bar and dynamic content height.",
    }];
    const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>Project Portfolio – Vimala Sellappan</h1>
      <div className="intro">
        <p>
          Welcome to my project portfolio! This page highlights some of my past projects, 
          what they do, the tools I used, and what I learned from each one. 
          It’s a personal space to track my growth, share my work, 
          and reflect on the challenges I’ve solved along the way.
        </p>
        <div className="button-wrapper">
          <button className='DisplayProject_button'
              onClick={() => setDisplayProjects(!DisplayProjects)}>
              {DisplayProjects ? 'Hide Projects' : 'Display Projects'}
          </button>
          </div>
      </div>
      <div className="project-wrapper">
        

        {DisplayProjects&&projects.map((project, index) => (
          <ProjectCard key={index} {...project} onClick={() => handleProjectClick(project)} />
        ))}
      </div>
      {selectedProject && (
        <Popup project_details={selectedProject} onClose={closePopup} />
      )}
    </div>
    
  );
}

export default Portfolio;