import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

// Skill Assets
import ReactIcon from "../assets/react.png";
import ReactNativeIcon from "../assets/react-native.png";
import NodeIcon from "../assets/nodejs.png";
import JavaScriptIcon from "../assets/javascript.png";
import HtmlIcon from "../assets/html.png";
import CssIcon from "../assets/css.png";
import GitIcon from "../assets/github.png";
import MongoIcon from "../assets/mongo-db.png";
import ReduxIcon from "../assets/redux.png";
import NextjsIcon from "../assets/nextjs.png";
import ExpressIcon from "../assets/express.png";

// Additional Skill Assets
import FirebaseIcon from "../assets/Firebase.png";
import DockerIcon from "../assets/Docker.png";
import ExpoIcon from "../assets/Expo.png";
import GitlabIcon from "../assets/Gitlab.png";
import BitBucketIcon from "../assets/BitBucket.png";
import JiraIcon from "../assets/Jira.png";
import PostgresIcon from "../assets/Postgres.png";
import MySQLIcon from "../assets/MySQL.png";

const SkillCard = ({ name, icon, category }) => (
  <div className="skill-card-item">
    <div className="skill-icon-thumb">
      <img src={icon} alt={name} className="skill-icon-img" />
    </div>
    <div className="skill-meta">
      <span className="skill-title">{name}</span>
      <span className="skill-badge">{category}</span>
    </div>
  </div>
);

const Skills = () => {
  // Line 1 (Moving Left): Varied mix of Frontend, Cloud & Backend
  const line1 = [
    { name: "React", icon: ReactIcon, category: "Frontend" },
    { name: "Docker", icon: DockerIcon, category: "DevOps" },
    { name: "Node.js", icon: NodeIcon, category: "Backend" },
    { name: "Firebase", icon: FirebaseIcon, category: "Cloud" },
    { name: "Next.js", icon: NextjsIcon, category: "Fullstack" },
    { name: "PostgreSQL", icon: PostgresIcon, category: "Database" },
    { name: "JavaScript", icon: JavaScriptIcon, category: "Language" },
    { name: "GitLab", icon: GitlabIcon, category: "CI/CD" },
    { name: "React Native", icon: ReactNativeIcon, category: "Mobile" },
    { name: "MySQL", icon: MySQLIcon, category: "Database" },
    { name: "Expo", icon: ExpoIcon, category: "Mobile" },
    { name: "Redux", icon: ReduxIcon, category: "State Mgmt" },
  ];

  // Line 2 (Moving Right): Varied mix of DBs, Tools & Frameworks
  const line2 = [
    { name: "MongoDB", icon: MongoIcon, category: "NoSQL DB" },
    { name: "React", icon: ReactIcon, category: "Frontend" },
    { name: "Express.js", icon: ExpressIcon, category: "Backend" },
    { name: "Jira", icon: JiraIcon, category: "Agile Mgmt" },
    { name: "Bitbucket", icon: BitBucketIcon, category: "Git Hosting" },
    { name: "Firebase", icon: FirebaseIcon, category: "BaaS" },
    { name: "CSS3", icon: CssIcon, category: "Styling" },
    { name: "Docker", icon: DockerIcon, category: "Container" },
    { name: "HTML5", icon: HtmlIcon, category: "Markup" },
    { name: "Next.js", icon: NextjsIcon, category: "Framework" },
    { name: "GitHub", icon: GitIcon, category: "Version Control" },
    { name: "PostgreSQL", icon: PostgresIcon, category: "SQL DB" },
  ];

  // Line 3 (Moving Left): Varied mix of Mobile, Core Tech & Collaboration
  const line3 = [
    { name: "Expo", icon: ExpoIcon, category: "Mobile App" },
    { name: "JavaScript", icon: JavaScriptIcon, category: "Core JS" },
    { name: "MySQL", icon: MySQLIcon, category: "Relational DB" },
    { name: "React Native", icon: ReactNativeIcon, category: "Cross-Platform" },
    { name: "GitLab", icon: GitlabIcon, category: "DevOps" },
    { name: "Node.js", icon: NodeIcon, category: "Runtime" },
    { name: "Redux", icon: ReduxIcon, category: "Store" },
    { name: "Docker", icon: DockerIcon, category: "Deployment" },
    { name: "Bitbucket", icon: BitBucketIcon, category: "VCS" },
    { name: "Firebase", icon: FirebaseIcon, category: "Auth & DB" },
    { name: "Express.js", icon: ExpressIcon, category: "REST API" },
    { name: "Jira", icon: JiraIcon, category: "Scrum" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-title">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>My Skills</h2>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 30 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="divider"></div>
        </motion.div>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Technologies, frameworks, databases, and DevOps tools I leverage to build scalable, high-performance software.
        </motion.p>
      </div>

      <div className="skills-marquee-container">
        {/* Line 1: Moving Left */}
        <div className="skills-marquee-row">
          <div
            className="skills-marquee-track skills-marquee-track--left"
            style={{ "--duration": "38s" }}
          >
            {line1.map((skill, idx) => (
              <SkillCard key={`l1-a-${idx}-${skill.name}`} {...skill} />
            ))}
          </div>
          <div
            className="skills-marquee-track skills-marquee-track--left"
            style={{ "--duration": "38s" }}
            aria-hidden="true"
          >
            {line1.map((skill, idx) => (
              <SkillCard key={`l1-b-${idx}-${skill.name}`} {...skill} />
            ))}
          </div>
        </div>

        {/* Line 2: Moving Right */}
        <div className="skills-marquee-row">
          <div
            className="skills-marquee-track skills-marquee-track--right"
            style={{ "--duration": "44s" }}
          >
            {line2.map((skill, idx) => (
              <SkillCard key={`l2-a-${idx}-${skill.name}`} {...skill} />
            ))}
          </div>
          <div
            className="skills-marquee-track skills-marquee-track--right"
            style={{ "--duration": "44s" }}
            aria-hidden="true"
          >
            {line2.map((skill, idx) => (
              <SkillCard key={`l2-b-${idx}-${skill.name}`} {...skill} />
            ))}
          </div>
        </div>

        {/* Line 3: Moving Left */}
        <div className="skills-marquee-row">
          <div
            className="skills-marquee-track skills-marquee-track--left"
            style={{ "--duration": "40s" }}
          >
            {line3.map((skill, idx) => (
              <SkillCard key={`l3-a-${idx}-${skill.name}`} {...skill} />
            ))}
          </div>
          <div
            className="skills-marquee-track skills-marquee-track--left"
            style={{ "--duration": "40s" }}
            aria-hidden="true"
          >
            {line3.map((skill, idx) => (
              <SkillCard key={`l3-b-${idx}-${skill.name}`} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
