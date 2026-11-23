import "./Projects.css";

const projects = [
  {
    title: "🎮 Bingo Game",
    description:
      "An interactive React.js Bingo game featuring a 5×5 board, Computer-powered gameplay, and multiplayer challenges.",
    demo: "https://daggupatileelanaren.github.io/bingo/",
    code: "https://github.com/DaggupatiLeelaNaren/bingo",
  },
  {
    title: "☕ Coffee Ordering System",
    description:
      "A feature-rich C++ console application simulating a real-world coffee shop checkout with cart management and dynamic pricing.",
    demo: "#",
    code: "#",
  },
  {
    title: "🔐 Register-Login Page",
    description:
      "A simple, responsive Register and Login Page built using HTML, CSS, and JavaScript.",
    demo: "https://daggupatileelanaren.github.io/---Register---Login-Page/",
    code: "https://github.com/DaggupatiLeelaNaren/---Register---Login-Page",
  },
  {
    title: "🎮 Tic-Tac-Toe: Multi-Mode Game",
    description:
      "A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript featuring three exciting game modes.",
    demo: "#",
    code: "#",
  },
  {
    title: "🎮 The Labyrinth Dream: Maze Game",
    description:
      "A procedural maze generator and game built with C++ and SFML featuring multiple difficulty levels and DFS algorithm.",
    demo: "#",
    code: "#",
  },
  {
    title: "🔵 Dot Connect Game",
    description:
      "Modern version of the classic childhood game showcasing a full-stack, real-time multiplayer experience.",
    demo: "#",
    code: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h1 className="section-title">Featured Projects</h1>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <button className="details-btn">
              View Details
            </button>

            <div className="project-links">
              <a href={project.demo}>Demo</a>
              <a href={project.code}>Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;