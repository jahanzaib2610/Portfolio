import React from "react";
import { Code2, Palette, Database, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import "./About.css";

const skills = [
  { name: "Frontend Development", progress: 90, icon: Code2 },
  { name: "UI/UX Design", progress: 85, icon: Palette },
  { name: "Backend Development", progress: 80, icon: Database },
];

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <div className="divider"></div>
          <p style={{ textAlign: "justify" }}>
            Passionate full-stack developer with a love for building dynamic,
            responsive, and user-centric web and mobile applications. With
            experience in React, React Native, MongoDB, Express.js, and Node.js,
            I specialize in creating seamless user experiences and efficient
            back-end solutions. I am skilled in developing robust cross-platform
            mobile apps for both Android and iOS, leveraging React Native to
            ensure high performance and native-like functionality. My expertise
            also includes designing intuitive user interfaces and delivering
            scalable solutions that meet modern development standards. Dedicated
            to turning innovative ideas into functional and visually appealing
            applications for web and mobile platforms.
          </p>
        </div>
        <div className="buttonSection">
          <div
            style={{
              textAlign: "center",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="btn btn-primary home-cta"
            >
              My Skills
              <ArrowRight size={20} />
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="btn btn-primary home-cta"
            >
              My Projects
              <ArrowRight size={20} />
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className="btn btn-primary home-cta"
            >
              Hire me Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="skill-card">
                <div className="skill-icon">
                  <Icon />
                </div>
                <h3 className="skill-title">{skill.name}</h3>
                <div className="skill-progress">
                  <div 
                    className="skill-progress-bar"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
                <p className="skill-percentage">{skill.progress}%</p>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default About;
