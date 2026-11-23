import React from "react";
import "./Certifications.css";

import { motion } from "framer-motion";

import {
  FaCertificate,
  FaEye,
  FaDownload,
  FaAws,
  FaRobot,
  FaBrain
} from "react-icons/fa";

/* Import your certificate images */

import awsCP from "../assets/AWS_i.png";
import automation from "../assets/RPA_i.png";
import salesforce from "../assets/SalesForce_i.png";

function Certifications() {

  const certificates = [

    {
      id:1,

      title:"AWS Certified Cloud Practitioner",

      issuer:"Amazon Web Services (AWS)",

      category:"Cloud Practitioner",

      year:"2026",

      icon:<FaAws />,

      image:awsCP,

      pdf:"https://drive.google.com/file/d/1RKkW3FdluLOBd4kMBBfJ-DKwPEG8aIX_/view?usp=sharing"
    },

    {
      id:2,

      title:"Automation Anywhere Certified Essentials RPA Professional",

      issuer:"Automation Anywhere",

      category:"Robotic Process Automation",

      year:"2023",

      icon:<FaRobot />,

      image:automation,

      pdf:"https://drive.google.com/file/d/12Joa8yP2iwDbUwu1gbX02q6uog1ql0xW/view?usp=sharing"
    },

    {
      id:3,

      title:"Salesforce Certified AI Associate",

      issuer:"Salesforce",

      category:"Artificial Intelligence",

      year:"2026",

      icon:<FaBrain />,

      image:salesforce,

      pdf:"https://drive.google.com/file/d/1RaBDWU9Cgf8VYnHLMmrTDPvV06MpOMs1/view?usp=sharing"
    }

  ];

  return (

    <section className="certifications">

      <motion.div

        initial={{opacity:0,y:-40}}

        animate={{opacity:1,y:0}}

        transition={{duration:.7}}

      >

        <h1 className="cert-title">

          <FaCertificate />

          My Certifications

        </h1>

        <p className="cert-subtitle">

          Professional certifications earned in Cloud Computing,
          Artificial Intelligence and Robotic Process Automation.

        </p>

      </motion.div>

      <div className="cert-grid">

        {

          certificates.map((cert,index)=>(

            <motion.div

              key={cert.id}

              className="cert-card"

              initial={{
                opacity:0,
                y:60
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
                delay:index*.15
              }}

            >

              <img

                src={cert.image}

                alt={cert.title}

                className="cert-image"

              />

              <div className="cert-content">

                <h2>

                  {cert.icon}

                  {cert.title}

                </h2>

                <p>

                  <strong>Issued By:</strong>

                  {cert.issuer}

                </p>

                <p>

                  <strong>Category:</strong>

                  {cert.category}

                </p>

                <p>

                  <strong>Completed:</strong>

                  {cert.year}

                </p>

                <div className="cert-buttons">

                  <a

                    href={cert.pdf}

                    target="_blank"

                    rel="noreferrer"

                    className="view-btn"

                  >

                    <FaEye />

                    View

                  </a>

                  <a

                    href={cert.pdf}

                    download

                    className="download-btn"

                  >

                    <FaDownload />

                    Download

                  </a>

                </div>

              </div>

            </motion.div>

          ))

        }

      </div>

    </section>

  );

}

export default Certifications;