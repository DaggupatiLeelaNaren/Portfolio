import React, { useState } from "react";
import "./Contact.css";

import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
//   FaLinkedin,
//   FaGithub,
//   FaInstagram
} from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

  };

  return (

    <section className="about-section">

      <div className="section-heading">

        <h2>Let's Connect</h2>

      </div>

      <div className="contact-container">

        {/* LEFT */}

        <motion.div

          className="contact-info"

          initial={{ opacity:0, x:-80 }}

          whileInView={{ opacity:1, x:0 }}

          viewport={{ once:true }}

          transition={{ duration:.7 }}

        >

          <h3>

            Let's Build Something Amazing 🚀

          </h3>

          <p>

            I'm always open to discussing new projects,
            internship opportunities,
            freelance work,
            or simply having a chat about technology.

          </p>

          <div className="info-box">

            <FaEnvelope className="info-icon"/>

            <div>

              <h4>Email</h4>

              <span>2200039046cser@gmail.com</span>

            </div>

          </div>

          <div className="info-box">

            <FaPhoneAlt className="info-icon"/>

            <div>

              <h4>Phone</h4>

              <span>+91 9603138020</span>

            </div>

          </div>

          <div className="info-box">

            <FaMapMarkerAlt className="info-icon"/>

            <div>

              <h4>Location</h4>

              <span>Guntur, Andhra Pradesh, India</span>

            </div>

          </div>

          {/* <div className="contact-social">

            <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer">

              <FaGithub/>

            </a>

            <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer">

              <FaLinkedin/>

            </a>

            <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noreferrer">

              <FaInstagram/>

            </a>

          </div> */}

        </motion.div>

        {/* RIGHT */}

        <motion.form

          className="contact-form"

          onSubmit={handleSubmit}

          initial={{ opacity:0, x:80 }}

          whileInView={{ opacity:1, x:0 }}

          viewport={{ once:true }}

          transition={{ duration:.7 }}

        >

          <input

            type="text"

            name="name"

            placeholder="Your Name"

            value={formData.name}

            onChange={handleChange}

            required

          />

          <input

            type="email"

            name="email"

            placeholder="Email Address"

            value={formData.email}

            onChange={handleChange}

            required

          />

          <input

            type="text"

            name="subject"

            placeholder="Subject"

            value={formData.subject}

            onChange={handleChange}

          />

          <textarea

            rows="6"

            name="message"

            placeholder="Write your message..."

            value={formData.message}

            onChange={handleChange}

            required

          ></textarea>

          <button type="submit">

            <FaPaperPlane/>

            Send Message

          </button>

        </motion.form>

      </div>

    </section>

  );

}

export default Contact;