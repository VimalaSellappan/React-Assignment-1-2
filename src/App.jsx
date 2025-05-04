// src/App.jsx
import ProjectCard from './components/projectcard';
import './index.css'; 


function App() {
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
      </div>
      <div className="project-wrapper left">
        <ProjectCard
          name="Genesis Portfolio Design"
          screenshot="/public/images/image1.png"
          repo="https://github.com/VimalaSellappan/Assignment-11"
          tech="HTML, SASS"
          description="Website with with three linked pages: Home, Projects, and Contact.
          Styled using Sass for modular, maintainable, and responsive design."
          learning="I learned how to build a multi-page website using only HTML and Sass."
          role="Solo project"
          challenges="One of the main challenges was organizing the Sass files, 
          ensuring consistent styling across multiple pages, and making the navigation links work correctly."
        />
      </div>
      <div className="project-wrapper right">
        <ProjectCard
          name="BHROMAON - 12hr Challenge"
          screenshot="/public/images/image2.png"
          repo="https://github.com/VimalaSellappan/Assignment-14"
          tech="HTML, CSS, Bootstrap"
          description="BHROMAON is a responsive travel landing page built from a Figma design, featuring search functionality, destination highlights, and a testimonial section."
          learning="Converted given Figma into a responsive web page and gained experience with version control using Git, managing layout structure, styling components, and organizing commits within a set deadline."
          role="Solo project"
          challenges="Positioning and layering issues and responsive design."
        />
      </div>
    </div>
  );
}

export default App;
