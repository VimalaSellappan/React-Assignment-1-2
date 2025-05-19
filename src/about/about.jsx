import { Link } from "react-router-dom";
import './about.css'
function About() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>About Me</h1>
        <p class="intro">
          I'm Vimala, currently working in logistics and returning to my IT roots through front-end development.
          I enjoy coding, learning new technologies, and turning ideas into interactive web pages.
        </p>
  
        <h3>Skills</h3>
        <ul class="liststyle">
          <li>HTML, CSS, Sass</li>
          <li>JavaScript, React</li>
          <li>Git & GitHub</li>
        </ul>
  
        <h3>Currently Learning</h3>
        <p style={{ marginTop: "20px" }}>React hooks, responsive design, and modern CSS layouts.</p>
      </div>
    );
  }
  
  export default About;
  