import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    jobTitle: "Frontend Developer",
    years: "Feb 2024 - Feb 2025",
    company: "Idea Section, Lahore",
    description: "Worked as a frontend developer in a startup company.",
  },
  {
    jobTitle: "ReactJS/ NextJS Developer",
    years: "Feb 2025 - Apr 2025",
    company: "Core Edge Solutions LTD, Lahore",
    description: "Worked as a ReactJS/ NextJS developer.",
  },
  {
    jobTitle: "Junior MERN Stack Developer",
    years: "Apr 2025 - Present",
    company: "Axis Cyber Technologies, Lahore",
    description: "Working as a Junior MERN Stack developer.",
  },
];

const Experience = () => {
  return (
    <div className="experience section">
      <motion.div
        className="section-title"
        style={{ display: "absolute" }}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 30 }}
        viewport={{ amount: 0.2, once: true }} // Once visible, it will trigger animation only once
        transition={{ duration: 0.5 }}
      >
        <h2>Experience</h2>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          viewport={{ amount: 0.2, once: true }} // Once visible, it will trigger animation only once
          transition={{ duration: 0.5 }}
        >
          <div className="divider"></div>
        </motion.div>
      </motion.div>
      <div className="experience-container">
        <div className="experience-stepper">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`step ${index % 2 === 0 ? "right" : "left"}`}
            >
              <div className="step-dot"></div>
              <div className="step-content">
                <h3>{exp.jobTitle}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-years">{exp.years}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
