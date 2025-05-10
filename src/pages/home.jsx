import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "10px", textAlign: "center" }}>
      <p class="home_intro">Hi, I'm Vimala Sellappan</p>
      <p>Aspiring Front-End Developer</p>
      <p>I love building user-friendly and responsive websites.</p>
      <Link to="/portfolio">
        <button>View My Projects</button>
      </Link>
    </div>
  );
}

export default Home;
