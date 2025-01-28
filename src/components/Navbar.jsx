import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, Moon, Sun, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // For hiding Navbar on scroll down
    // const handleScroll = () => {
    //   const currentScrollY = window.scrollY;
    //   if (currentScrollY > lastScrollY && currentScrollY > 150) {
    //     setHidden(true);
    //   } else {
    //     setHidden(false);
    //   }
    //   setLastScrollY(currentScrollY);
    // };

    // For consistently displaying Navbar
    const handleScroll = () => {
      // Only update lastScrollY without hiding the navbar
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "My Skills", to: "skills" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className="navbar"
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        
      }}
    >
      <div
        className="navbar-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px",
          padding: "0 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Link to="home" className="navbar-logo">
          Jahan Zaib Inc.
        </Link>

        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="nav-link"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="navbar-toggle"
          // style={{ cursor: "pointer !important", zIndex: 999999 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
