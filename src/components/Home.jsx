import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";
import "./Home.css";
import Typed from "typed.js";
import tune2 from "../assets/notify2.mp3";
import DataRain from "./ui/data-rain";
import LaserFlow from "./ui/LaserFlow";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { isDark } = useTheme();

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

    return () => {
      typed.destroy();
    };
  }, []);

  const audio = new Audio(tune2);
  audio.loop = true;

  const rainPalette = isDark
    ? {
        calm: "#22e6ff",
        mid: "#8a5cff",
        hot: "#ff3d9a",
      }
    : {
        calm: "#0284c7",
        mid: "#7c3aed",
        hot: "#db2777",
      };

  return (
    <section id="home" className="home" style={{ overflow: "hidden" }}>
      <DataRain
        key={isDark ? "dark" : "light"}
        fullscreen={false}
        count={500}
        palette={rainPalette}
      />

      {/* LaserFlow — persistently mounted; when theme changes, dye pours down from the top like a waterfall */}
      <LaserFlow
        surfaceLevel={1}
        beamPosition={0.69}
        color={isDark ? "#3847ff" : "#7c3aed"}
        intensity={isDark ? 1.8 : 1.4}
        beamWidth={1.7}
        flare={2}
        spread={isDark ? 2 : 1.6}
        spill={isDark ? 1.2 : 0.9}
        fog={0}
        dust={isDark ? 1.3 : 0.8}
        streaks={1.5}
        dots={1}
        pulse={1.5}
        speed={2}
        seed={isDark ? 20 : 42}
        intro={true}
        theme={isDark ? "dark" : "light"}
        mouseInteraction={true}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

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
            onClick={() => {
              audio.loop = false;
              audio.play();
            }}
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
