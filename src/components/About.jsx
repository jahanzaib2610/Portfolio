import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion"; // Import motion
import "./About.css";
import tune2 from "../assets/notify2.mp3";

const audio = new Audio(tune2);
  audio.loop = true;
const About = () => {
  return (
    <section
      id="about"
      className="section about"
      style={{ overflow: "hidden" }}
    >
      <div className="container">
        {/* Section Title with Framer Motion Animation triggered when in view */}
        <div className="section-title">
        <motion.div
        style={{display:'absolute'}}
          whileInView={{ opacity: 1, x:0 }}
          initial={{ opacity: 0, x:50 }}
          viewport={{ amount: 0.5 }} // Once visible, it will trigger animation only once
          transition={{ duration: 1 }}
          
        >
          <h2>About Me</h2>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x:0 }}
          initial={{ opacity: 0, x:-50 }}
          viewport={{ amount: 0.5 }}// Once visible, it will trigger animation only once
          transition={{ duration: 1 }}
          
        >
          <div className="divider"></div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ amount: 0.5 }} // Once visible, it will trigger animation only once
          transition={{ duration: 1 }}
          
        >
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
        </motion.div>
        </div>

        {/* Buttons with animations triggered when in view */}

        <div
          style={{
            textAlign: "center",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            flexWrap: "wrap",
          }}
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ amount: 0.5 }} // Once visible, it will trigger animation only once
            transition={{ duration: 0.8, delay: 0.2 }}
            className="buttonSection"
          >
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
              className="btn btn-primary home-cta"
              onClick={() => {
                audio.loop = false;
                audio.play();
              }}
            >
              My Skills
              <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            viewport={{ amount: 0.5 }} // Once visible, it will trigger animation only once
            transition={{ duration: 0.8, delay: 0.4 }}
            className="buttonSection"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
              className="btn btn-primary home-cta"
              onClick={() => {
                audio.loop = false;
                audio.play();
              }}
            >
              My Projects
              <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ amount: 0.5 }} // Once visible, it will trigger animation only once
            transition={{ duration: 0.8, delay: 0.2 }}
            className="buttonSection"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-10}
              duration={300}
              className="btn btn-primary home-cta"
              onClick={() => {
                audio.loop = false;
                audio.play();
              }}
            >
              Hire me Now
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
