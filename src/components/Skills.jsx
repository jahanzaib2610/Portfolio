import React from "react";
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
import "./Skills.css"; // Your CSS file for styling

const Skills = () => {
  const skills = [
    {
      icon: <img src={ReactIcon} style={{ width: "60%" }} alt="React" />,
      name: "React",
      level: 90,
      expertise:'Advanced',
      description: "To build dynamic and interactive web user interfaces.",
    },
    {
      icon: (
        <img
          src={ReactNativeIcon}
          style={{ width: "60%" }}
          alt="React Native"
        />
      ),
      name: "React Native",
      expertise:'Advanced',
      level: 80,
      description: "To develop cross-platform mobile applications.",
    },
    {
      icon: <img src={NodeIcon} style={{ width: "60%" }} alt="Node.js" />,
      name: "Node.js",
      expertise:'Intermediate',
      level: 60,
      description:
        "To build scalable backend APIs and server-side applications.",
    },
    {
      icon: <img src={MongoIcon} style={{ width: "60%" }} alt="MongoDB" />,
      name: "MongoDB",
      expertise:'Intermediate',
      level: 50,
      description:
        "To store and manage data in a NoSQL database for flexible schema needs.",
    },
    {
      icon: <img src={ExpressIcon} style={{ width: "60%" }} alt="MongoDB" />,
      name: "ExpressJS",
      expertise:'Intermediate',
      level: 60,
      description:
        "For building fast, scalable web applications and APIs in Node.js.",
    },
    {
      icon: <img src={NextjsIcon} style={{ width: "60%" }} alt="MongoDB" />,
      name: "NextJS",
      expertise:'Beginner',
      level: 40,
      description:
        "To build React applications with server-side rendering and static site generation.",
    },
    {
      icon: <img src={ReduxIcon} style={{ width: "60%" }} alt="MongoDB" />,
      name: "Redux/Redux Toolkit",
      expertise:'Intermediate',
      level: 60,
      description:
        "For simplifying state management in React applications with Redux.",
    },
    {
      icon: (
        <img src={JavaScriptIcon} style={{ width: "60%" }} alt="JavaScript" />
      ),
      name: "JavaScript",
      expertise:'Advanced',
      level: 90,
      description:
        "To handle client-side functionality and interactive web features.",
    },
    {
      icon: <img src={HtmlIcon} style={{ width: "60%" }} alt="HTML5" />,
      name: "HTML5",
      expertise:'Advanced',
      level: 90,
      description: "To structure the content of web pages.",
    },
    {
      icon: <img src={CssIcon} style={{ width: "60%" }} alt="CSS3" />,
      name: "CSS3",
      expertise:'Advanced',
      level: 80,
      description: "To style and layout web pages for an appealing design.",
    },
    {
      icon: <img src={GitIcon} style={{ width: "60%" }} alt="Git" />,
      name: "Git",
      level: 60,
      expertise:'Intermediate',
      description:
        "To manage version control and collaborate on code efficiently.",
    },
    
  ];


  return (
    <div
      id="skills"
      style={{paddingBottom:'3%', paddingTop:'2%', background: "#f9fafb" }}
    >
      <div className="section-title">
        <h2>My Skills</h2>
        <div className="divider"></div>
      </div>
      <div className="cards-container">
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div className="card__icon" style={{ textAlign: "center" }}>
                {skill.icon}
              </div>
              <h5>{skill.name}</h5>
            </div>
            <div className="card__content">
              <p className="card__title">{skill.name}</p>
              <p className="card__description">
                <span>{skill.description}</span>
                <p>Skill Level(%) : <b>{skill.expertise}</b></p>
                0{" "}
                <progress
                  value={skill.level}
                  max={100}
                  style={{ width: "80%" }}
                />{" "}
                100
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
