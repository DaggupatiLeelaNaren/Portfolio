import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Projects from "./Projects"; // Change the path if needed

function Home() {
  return (
    <>
      <section className="hero" id="home" >
        <div className="hero-box">

          <h1>
            Hi, I'm <span className="name">Leela Naren Daggupati</span>
          </h1>

          <p className="hero-role">

            A passionate{" "}

            <TypeAnimation
              sequence={[
                "Competitive Programmer",
                2000,
                "AI Enthusiast",
                2000,
                "Web Developer",
                2000,
                "Software Engineer",
                2000,
                "Problem Solver",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />

          </p>

          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Projects
            <FaArrowRight />
          </button>

        </div>
      </section>

      {/* Projects Section */}

      <Projects />

    </>
  );
}

export default Home;