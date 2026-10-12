import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
