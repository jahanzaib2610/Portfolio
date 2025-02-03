import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";
import "./Home.css";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        "FrontEnd Developer",
        "BackEnd Developer",
        "Full-Stack Developer",
      ],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed(".home-subtitle", options);

    // Cleanup function to destroy the instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home" style={{ overflow: "hidden" }}>
      <div className="background-circle circle-1"></div>
      <div className="background-circle circle-2"></div>

      <div
        className="home-content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h2 className="home-title">
          Hi, I'm <span>Jahan Zaib</span>
        </h2>
        <h3>
          and I'm a <span className="home-subtitle"></span>
        </h3>
        <br />
        {/* <br /> */}

        <div
          className="home-button"
          style={{ textAlign: "center", width: "100%" }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            style={{ width: "240px" }}
            className="btn btn-primary home-cta"
          >
            More About Me...
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
