import React, { useState, useEffect, useRef } from "react";
import { Link, scroller } from "react-scroll";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import GooeyNav from "./GooeyNav";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDark, toggleTheme } = useTheme();
  const isClickScrolling = useRef(false);

  const navItems = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Experience", target: "experience" },
    { label: "Skills", target: "skills" },
    { label: "Services", target: "services" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  const handleSelect = (index, item) => {
    setActiveIndex(index);
    isClickScrolling.current = true;

    scroller.scrollTo(item.target, {
      smooth: true,
      offset: -85,
      duration: 500,
    });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 600);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      // When near the very bottom of the page, activate the last section (Contact)
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveIndex((prev) => (prev !== navItems.length - 1 ? navItems.length - 1 : prev));
        return;
      }

      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].target);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveIndex((prev) => (prev !== i ? i : prev));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-pill">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-85}
          duration={500}
          className="navbar-logo"
          onClick={() => setActiveIndex(0)}
        >
          Jahan Zaib Inc.
        </Link>

        <div className="navbar-gooey-wrapper">
          <GooeyNav
            items={navItems}
            activeIndex={activeIndex}
            onChange={handleSelect}
            theme={isDark ? "dark" : "light"}
            size="md"
            frame={false}
            color={isDark ? "#8a5cff" : "#6b46c1"}
            activeTextColor="#ffffff"
            colors={
              isDark
                ? ["#22e6ff", "#8a5cff", "#ff3d9a"]
                : ["#0284c7", "#7c3aed", "#ec4899"]
            }
            particleCount={14}
            spread={48}
            animationTime={550}
            timeVariance={250}
            gooeyness={0.5}
            wobble={0.45}
            hoverEffect={true}
          />
        </div>

        <div className="navbar-right">
          {/* Animated Dark/Light Toggle Button */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  style={{ display: "flex" }}
                >
                  <Sun size={19} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  style={{ display: "flex" }}
                >
                  <Moon size={19} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Floating Glass Mobile Dropdown Card */}
      {isOpen && (
        <div className="mobile-menu-pill">
          <ul>
            {navItems.map((item, index) => (
              <li key={item.target}>
                <a
                  href={`#${item.target}`}
                  className={index === activeIndex ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    handleSelect(index, item);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
