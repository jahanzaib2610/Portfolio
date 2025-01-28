import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import "./Projects.css";
import MindSetImg from "../assets/Mindset.png";
import PortfolioImg from "../assets/portfolio.png";
import GuidePlusImg from "../assets/GuidePlus.jpg";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Guide Plus | Mobile App",
    description:
      "Developed a full stack mobile application designed to assist users with multiple features.",
    detailedDescription: [
      "Optimized data storage and retrieval processes using MongoDB, enabling scalable data management and reducing query response times.",
      "Developed a secure and efficient backend using NodeJS and ExpressJS to handle server-side logic, build APIs, and ensure secure user authentication.",
      "Designed and delivered a responsive front-end with React Native, enhancing overall user experience.",
      "Coordinated with the front-end team to integrate user-facing elements with server-side logic, resulting in a cohesive and well-functioning application.",
      "Performed thorough testing to enhance app reliability and optimize performance, ensuring a high-quality final product.",
    ],
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: -50 },
    image: GuidePlusImg,
    tags: ["React", "React Native", "Express", "Node.js", "MongoDB"],
    liveLink: "#",
    githubLink: "https://github.com/jahanzaib2610",
  },
  {
    title: "Mindset Medi | Mobile App",
    description:
      "Contributed as a front-end developer, designed and deployed mobile app for both iOS and Android.",
    detailedDescription: [
      "Responsive Design: Ensured an optimized experience for both portrait and landscape orientations, adapting seamlessly to various screen sizes.",
      "Payment Integration: Implemented secure payment functionality using Stripe and Apple Pay, ensuring compliance with industry standards for data security and user privacy.",
      "Survey Integration: Enabled users to complete a questionnaire to better understand their mental wellness needs and receive customized recommendations.",
      "Backend Collaboration: Partnered with the backend team to define API requirements and optimize data flow for a seamless user experience.",
      "API Integration: Integrated APIs to fetch survey questionnaires and securely send user responses to the backend for processing and data storage.",
      "Platform-Specific Issue Resolution: Resolved platform-specific issues on iOS and Android, enhancing the app's stability and performance.",
    ],
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 50 },
    image: MindSetImg,
    tags: ["React", "React Native", "Stripe", "JavaScript"],
    liveLink: "#",
    githubLink: "https://github.com/jahanzaib2610",
  },
  {
    title: "Personal Portfolio",
    description:
      "Designed and developed personal full-stack portfolio website and deployed it on Vercel.com.",
    detailedDescription: [
      "Responsive Design: Developed a mobile-first responsive layout that adapts seamlessly across all screen sizes, ensuring an optimal viewing experience on both desktop and mobile devices.",
      "Interactive UI: Designed and implemented an engaging user interface using React and Material-UI, with a focus on usability and aesthetics.",
      "Performance Optimization: Utilized code-splitting and lazy loading techniques to optimize the portfolio’s performance and ensure fast load times.",
      "Deployment: Deployed the portfolio on a reliable hosting platform (Vercel) with continuous deployment pipelines for quick updates.",
      "Social Media Integration: Linked to professional profiles (e.g., LinkedIn, GitHub) for better networking and showcasing expertise.",
      "Backend Integration: Implemented a backend to receive messages from users who contact me through the portfolio, ensuring secure and reliable communication.",
    ],
    image: PortfolioImg,
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: 50 },
    tags: [
      "React",
      "React-Bootstrap",
      "Material-UI",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
    liveLink: "#",
    githubLink: "https://github.com/jahanzaib2610",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="section projects"
      style={{ overflow: "hidden" }}
    >
      <div className="container">
        <div className="section-title">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            viewport={{ amount: 0.5 }} // Once visible, it will trigger animation only once
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>My Projects</h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            viewport={{ amount: 0.5 }} // Once visible, it will trigger animation only once
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="divider"></div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            viewport={{ amount: 0.5 }} // Once visible, it will trigger animation only once
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Here are some of my recent projects that showcase my skills and
              expertise
            </p>
          </motion.div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              whileInView={project.whileInView}
              initial={project.initial}
              viewport={{ amount: 0.5 }} // Once visible, it will trigger animation only once
              transition={{ duration: 0.8, delay: 0.4 }}
              key={project.title}
            >
              <div className="project-card">
                <div className="project-image">
                  <img
                    style={{ objectFit: "contain" }}
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="project-overlay">
                    <div
                      style={{ cursor: "pointer" }}
                      className="project-link"
                      onClick={() => openModal(project)}
                    >
                      <ExternalLink size={20} />
                    </div>
                    <a
                      href={project.githubLink}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h3>{selectedProject.title}</h3>
            <p style={{ textAlign: "left" }}>
              Detailed Description of Project:
            </p>
            <ul>
              {selectedProject.detailedDescription.map((description) => {
                return <li key={description}>{description}</li>;
              })}
            </ul>

            <div className="modal-tags">
              {selectedProject.tags.map((tag) => (
                <span key={tag} className="modal-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
