import React from "react";
import "./Education.css";

import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaSchool,
  FaUniversity,
  FaCalendarAlt,
  FaAward
} from "react-icons/fa";

function Education() {

  const education = [

    {
      id:1,
      icon:<FaUniversity />,
      degree:"Bachelor of Technology",
      branch:"Computer Science & Engineering",
      college:"K L University",
      year:"2023 - 2026",
      grade:"CGPA: 8.9 / 10",
      description:
      "Focused on Full Stack Development, Data Structures, AI & Machine Learning, Database Management Systems, Cloud Computing and Software Engineering."
    },

    {
      id:2,
      icon:<FaGraduationCap />,
      degree:"Diploma",
      branch:"Mechatronics Engineering",
      college:"MSME Technical Center",
      year:"2020 - 2023",
      grade:"Percentage: 68%",
      description:
      "Studied Mechanical, Electronics and Automation with practical industrial training and project development."
    },

    {
      id:3,
      icon:<FaSchool />,
      degree:"Secondary School",
      branch:"SSC",
      college:"Oxford English Medium School",
      year:"2018 - 2019",
      grade:"GPA: 9.9 / 10",
      description:
      "Completed secondary education with excellent academic performance and active participation in extracurricular activities."
    }

  ];

  return (

    <section className="about-section">

      <div className="section-heading">

        <h2>Education</h2>

      </div>

      <div className="timeline">

        {

          education.map((item,index)=>(

            <motion.div

              className="timeline-item"

              key={item.id}

              initial={{
                opacity:0,
                x:index%2===0 ? -80 : 80
              }}

              whileInView={{
                opacity:1,
                x:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                duration:.7,
                delay:index*.2
              }}

            >

              {/* Circle */}

              <div className="timeline-circle">

                {item.icon}

              </div>

              {/* Card */}

              <div className="education-card">

                <h3>

                  {item.degree}

                </h3>

                <h4>

                  {item.branch}

                </h4>

                <div className="education-meta">

                  <span>

                    <FaUniversity />

                    {item.college}

                  </span>

                  <span>

                    <FaCalendarAlt />

                    {item.year}

                  </span>

                  <span>

                    <FaAward />

                    {item.grade}

                  </span>

                </div>

                <p>

                  {item.description}

                </p>

              </div>

            </motion.div>

          ))

        }

      </div>

    </section>

  );

}

export default Education;