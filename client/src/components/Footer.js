import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h2>Leela Naren Daggupati</h2>

          <p>
            Passionate Software Developer dedicated to building
            modern, responsive, and user-friendly web applications.
          </p>
        </div>

        <div className="footer-center">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certifications</a>

        </div>

        <div className="footer-right">

          <h3>Connect</h3>

          <div className="social-icons">

            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="mailto:example@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Leela Naren Daggupati. All Rights Reserved.
        </p>

        <button onClick={scrollTop}>
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
}

export default Footer;