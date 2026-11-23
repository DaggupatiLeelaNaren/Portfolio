import React from "react";
import "./SocialLinks.css";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
//   FaEnvelope,
  FaExternalLinkAlt
} from "react-icons/fa";

import {
  SiLeetcode,
//   SiHackerrank,
//   SiCodechef,
//   SiCodeforces
} from "react-icons/si";

function SocialLinks() {

  const profiles = [

    {
      id:1,
      icon:<FaLinkedin />,
      title:"LinkedIn",
    //   subtitle:"Professional Network",
      link:"https://www.linkedin.com/in/leela-naren-daggupati-757302264/",
      color:"#0A66C2"
    },

    {
      id:2,
      icon:<FaGithub />,
      title:"GitHub",
    //   subtitle:"Projects & Open Source",
      link:"https://github.com/DaggupatiLeelaNaren",
      color:"#181717"
    },

    {
      id:3,
      icon:<SiLeetcode />,
      title:"LeetCode",
    //   subtitle:"Coding Challenges",
      link:"https://leetcode.com/u/LeelaNaren2200039046/",
      color:"#FFA116"
    },

    // {
    //   id:4,
    //   icon:<SiHackerrank />,
    //   title:"HackerRank",
    //   subtitle:"Programming Skills",
    //   link:"https://hackerrank.com/yourusername",
    //   color:"#00EA64"
    // },

    // {
    //   id:5,
    //   icon:<SiCodechef />,
    //   title:"CodeChef",
    //   subtitle:"Competitive Programming",
    //   link:"https://codechef.com/users/yourusername",
    //   color:"#5B4638"
    // },

    // {
    //   id:6,
    //   icon:<SiCodeforces />,
    //   title:"Codeforces",
    //   subtitle:"Contest Profile",
    //   link:"https://codeforces.com/profile/yourusername",
    //   color:"#1F8ACB"
    // },

    // {
    //   id:7,
    //   icon:<FaEnvelope />,
    //   title:"Email",
    //   subtitle:"Get in Touch",
    //   link:"mailto:yourmail@gmail.com",
    //   color:"#EA4335"
    // }

  ];

  return (

    <section className="about-section">

      <div className="section-heading">

        <h2>Presence & Profiles</h2>

      </div>

      <div className="social-grid">

        {

          profiles.map((profile,index)=>(

            <motion.a

              href={profile.link}

              target="_blank"

              rel="noreferrer"

              key={profile.id}

              className="social-card"

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                duration:.5,
                delay:index*0.1
              }}

            >

              <div
                className="social-icon"
                style={{
                  background:profile.color
                }}
              >

                {profile.icon}

              </div>

              <div className="social-info">

                <h3>

                  {profile.title}

                </h3>

                <p>

                  {profile.subtitle}

                </p>

              </div>

              <div className="visit-btn">

                Visit

                <FaExternalLinkAlt />

              </div>

            </motion.a>

          ))

        }

      </div>

    </section>

  );

}

export default SocialLinks;