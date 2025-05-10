import ProjectCard from "../assets/components/projectcard";
import '../index.css'; 


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
      <div className="project-wrapper left1">
        <ProjectCard
          name="BAR141 website"
          screenshot="/public/images/image3.png"
          repo="https://github.com/xOsitax/BarWebsite"
          tech="HTML,CSS"
          description="Website with with four linked pages. Styled using CSS and I was responsible for gallery page designed wit HTML and CSS.It features a fixed navigation bar, a colorful animated “Gallery” heading,
           a sophisticated CSS grid-based image gallery showcasing food and interiors, and a fully styled footer with location and contact details."
          learning="I learned media queries, fixed navigataion and CSS animations."
          role="Group project"
          challenges="Aligned complex grid of images across multiple rows and columns and layout issues due to fixed nav bar and dynamic content height."
        />
      </div>
    </div>
  );
}

export default App;