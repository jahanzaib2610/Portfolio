import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CodeIcon from "@mui/icons-material/Code";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import StorageIcon from "@mui/icons-material/Storage";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import BorderGlow from "./ui/BorderGlow";
import "./Services.css";

const services = [
  {
    title: "Website Development",
    description:
      "Creating responsive, high-performance, and visually engaging websites tailored to your needs.",
    icon: CodeIcon,
    transition: { duration: 0.5, delay: 0.4 },
  },
  {
    title: "Mobile App Development",
    description:
      "Building robust, cross-platform mobile applications using modern frameworks and native tools.",
    icon: PhoneIphoneIcon,
    transition: { duration: 0.5, delay: 0.6 },
  },
  {
    title: "iOS App Development",
    description:
      "Designing and developing smooth, elegant, and efficient native-quality iOS applications.",
    icon: AppleIcon,
    transition: { duration: 0.5, delay: 0.5 },
  },
  {
    title: "Android App Development",
    description:
      "Creating scalable, feature-rich, and user-friendly Android applications with seamless performance.",
    icon: AndroidIcon,
    transition: { duration: 0.5, delay: 1 },
  },
  {
    title: "Front-end Development",
    description:
      "Building interactive, accessible, and dynamic user interfaces with modern front-end frameworks.",
    icon: ViewQuiltIcon,
    transition: { duration: 0.5, delay: 1.2 },
  },
  {
    title: "Back-end Development",
    description:
      "Developing secure, high-throughput, and scalable backend architectures to power your products.",
    icon: StorageIcon,
    transition: { duration: 0.5, delay: 1.4 },
  },
];

const Services = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="services"
      className="section services"
      style={{ overflow: "hidden" }}
    >
      <div className="container">
        <div className="section-title">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>My Services</h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="divider"></div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>
              I offer a wide range of services to help bring your digital ideas
              to life
            </p>
          </motion.div>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -30 }}
                viewport={{ amount: 0.3, once: true }}
                transition={service.transition}
                key={service.title}
              >
                <BorderGlow
                  className="service-card"
                  borderRadius={22}
                  glowRadius={40}
                  glowIntensity={1.25}
                  coneSpread={28}
                  backgroundColor={isDark ? "#161226" : "#ffffff"}
                  glowColor={isDark ? "275 85 75" : "270 70 65"}
                  colors={
                    isDark
                      ? ["#c084fc", "#f472b6", "#38bdf8"]
                      : ["#a855f7", "#ec4899", "#3b82f6"]
                  }
                  isLight={!isDark}
                >
                  <div className="service-icon">
                    <Icon />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </BorderGlow>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
