import React from "react";
import "./About.css";

import Bio from "../../components/About/Bio";
import SocialLinks from "../../components/About/SocialLinks";
import Skills from "../../components/About/Skills";
import Education from "../../components/About/Education";
import Contact from "../../components/About/Contact";

import { motion } from "framer-motion";

function About() {
  return (
    <section className="about-page">

      {/* Background Effects */}
      <div className="gradient-circle gradient-one"></div>
      <div className="gradient-circle gradient-two"></div>

      {/* Hero / Bio */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Bio />
      </motion.div>

      {/* Social Profiles */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <SocialLinks />
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Skills />
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Education />
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <Contact />
      </motion.div>

    </section>
  );
}

export default About;