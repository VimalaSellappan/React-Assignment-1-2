import { Link } from "react-router-dom";
import './home.css'

 function Home() {
  return (
    <div class="home_container">
      <div class="left">
        <img src="./images/profilepicture.jpeg" alt="profile_picture"/>
      </div>
      <div class="right">
        <p class="home_intro">Hi, I'm Vimala Sellappan</p>
        <p>Aspiring Front-End Developer</p>
        <p>I love building user-friendly and responsive websites.</p>
        <Link to="/portfolio">
          <button>View My Projects</button>
        </Link>
      </div>  
    </div>
  );
}

export default Home;
