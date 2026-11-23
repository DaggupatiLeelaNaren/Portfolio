import React from "react";
import "./Bio.css";
import profileImage from "../../assets/profile.jpeg";

import { motion } from "framer-motion";

import {
//   FaGithub,
//   FaLinkedin,
  FaDownload,
//   FaEnvelope
} from "react-icons/fa";

function Bio() {

  return (

    <section className="about-section">

      <div className="section-heading">
        <h2>Professional Bio</h2>
      </div>

      <motion.div
        className="bio-card"

        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}

        transition={{
          duration: .8
        }}
      >

        {/* LEFT */}

        <div className="bio-left">

          <div className="profile-wrapper">

            <img
              src={profileImage}
              alt="Profile"
              className="profile-image"
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="bio-right">

          <h1 className="bio-name">
            Leela Naren Daggupati
          </h1>

          <h3 className="bio-role">
            Full Stack Developer
          </h3>

          <p className="bio-description">

            I am a passionate Full Stack Developer with a strong
            foundation in Java, React.js, Node.js, Express.js,
            MongoDB, and Python.

            <br />

            I enjoy building scalable web applications,
            creating beautiful user interfaces,
            and solving real-world problems through technology.

            <br />

            My goal is to work with an innovative company
            where I can contribute to impactful projects,
            continuously learn new technologies,
            and grow as a Software Engineer.

          </p>

          {/* BUTTONS */}

          <div className="bio-buttons">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >

              <FaDownload />

              Download Resume

            </a>

          </div>

          {/* SOCIAL ICONS

          <div className="bio-social">

            <a

              href="https://github.com/yourusername"

              target="_blank"

              rel="noreferrer"

            >

              <FaGithub />

            </a>

            <a

              href="https://linkedin.com/in/yourusername"

              target="_blank"

              rel="noreferrer"

            >

              <FaLinkedin />

            </a>

            <a

              href="mailto:yourmail@gmail.com"

            >

              <FaEnvelope />

            </a>

          </div> */}

          {/* STATS */}

          <div className="bio-stats">

            <div className="stat-card">

              <h2>6+</h2>

              <span>Projects</span>

            </div>

            <div className="stat-card">

              <h2>10+</h2>

              <span>Technologies</span>

            </div>

            <div className="stat-card">

              <h2>2026</h2>

              <span>Graduate</span>

            </div>

          </div>

        </div>

      </motion.div>

    </section>

  );

}

export default Bio;