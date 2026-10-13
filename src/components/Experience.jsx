import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import BorderGlow from "./ui/BorderGlow";

const experiences = [
  {
    jobTitle: "Senior Full Stack Engineer",
    years: "Jun 2026 - Present",
    company: "Preesoft, Lahore",
  },
  {
    jobTitle: "MERN Stack Developer",
    years: "Apr 2025 - Jun 2026",
    company: "Axis Cyber Technologies, Lahore",
  },
  {
    jobTitle: "ReactJS/ NextJS Developer",
    years: "Feb 2025 - Apr 2025",
    company: "Core Edge Solutions LTD, Lahore",
  },
  {
    jobTitle: "Frontend Developer",
    years: "Feb 2024 - Feb 2025",
    company: "Idea Section, Lahore",
  },
];

const Experience = () => {
  const { isDark } = useTheme();

  return (
    <section id="experience" className="experience section">
      <motion.div
        className="section-title"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 30 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Experience</h2>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="divider"></div>
        </motion.div>
      </motion.div>

      <div className="experience-container">
        <div className="experience-stepper">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`step ${index % 2 === 0 ? "right" : "left"}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="step-dot"></div>
              <BorderGlow
                className="step-content"
                borderRadius={18}
                glowRadius={36}
                glowIntensity={1.2}
                coneSpread={28}
                backgroundColor={isDark ? "#161224" : "#ffffff"}
                glowColor={isDark ? "275 85 75" : "270 70 65"}
                colors={
                  isDark
                    ? ["#c084fc", "#f472b6", "#38bdf8"]
                    : ["#a855f7", "#ec4899", "#3b82f6"]
                }
                isLight={!isDark}
              >
                <h3>{exp.jobTitle}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-years">{exp.years}</p>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
