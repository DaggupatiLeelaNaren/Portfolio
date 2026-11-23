import React from "react";
import "./Skills.css";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaCode
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiTensorflow
} from "react-icons/si";

function Skills() {

  const skillCategories = [

    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Redux", icon: <SiRedux /> },
      ],
    },

    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },

    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },

    {
      title: "AI / Machine Learning",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "CNN" },
        { name: "Deep Learning" },
        { name: "OpenCV" },
        { name: "Computer Vision" },
      ],
    },

    {
      title: "Developer Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <FaCode /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },

  ];

  return (

    <section className="about-section">

      <div className="section-heading">
        <h2>Core Expertise</h2>
      </div>

      <div className="skills-grid">

        {skillCategories.map((category, index) => (

          <motion.div
            key={index}
            className="skills-card"

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >

            <h3>{category.title}</h3>

            <div className="skill-list">

              {category.skills.map((skill, i) => (

                <div className="skill-pill" key={i}>

                  {skill.icon &&

                    <span className="skill-icon">

                      {skill.icon}

                    </span>

                  }

                  <span>

                    {skill.name}

                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default Skills;