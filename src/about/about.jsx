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
        <h3>Education & Training</h3>
      <ul className="liststyle">
        <li><strong>Bachelor of Engineering – Information Technology</strong>, VSB Engineering College, India (2008–2012) – First Class</li>
        <li><strong>Sundsgården Folkhögskola, Sweden</strong> (May 2021 – Oct 2021) – Intensive course in web Development</li>
        <li><strong>Lexicon, Sweden</strong> (May 2021 – Oct 2021) – Intensive course in modern technologies</li>
        <li><strong>SFI Kurs C, Sweden</strong> (Jan 2021 – Sep 2021) – Intensive Swedish language course</li>
        <li><strong>High School Certificate</strong>, Bharathi HSS, Namakkal, India (2008) – 89%</li>
        <li><strong>Secondary School Certificate</strong>, Bharathi HSS, Namakkal, India (2012) – 84%</li>
      </ul>

      <h3>Work Experience</h3>
      <ul className="liststyle">
        <li><strong>Gruppledare</strong>, Svensk Hemleverans, Linköping, Sweden (Oct 2022 - Present) </li>
        <li><strong>Distributor</strong>, Svensk Hemleverans, Linköping, Sweden (Sep 2018 – Jan 2021)</li>
        <li><strong>Post Sorter</strong>, Svensk Hemleverans, Linköping, Sweden (Jan 2017 – May 2017)</li>
        <li><strong>Lecturer</strong>, Muthayammal Polytechnic College, Rasipuram, India (Jan 2013 – Mar 2015)</li>
      </ul>
      <div className="contact_footer">
        <a href="mailto:vimalasellappan1991@gmail.com" target="_blank" rel="noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/vimala-sellappan" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/VimalaSellappan" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
      </div>
    );
  }
  
  export default About;
  