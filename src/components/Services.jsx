import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CodeIcon from "@mui/icons-material/Code";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import StorageIcon from "@mui/icons-material/Storage";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    title: "Website Development",
    description:
      "Creating responsive and visually appealing websites tailored to your needs.",
    icon: CodeIcon, // Replace with the appropriate icon if needed
    transition: { duration: 0.8, delay: 0.4 },
  },
  {
    title: "Mobile App Development",
    description:
      "Building high-quality cross-platform mobile applications using modern frameworks.",
    icon: PhoneIphoneIcon,
    transition: { duration: 0.8, delay: 0.6 },
  },
  {
    title: "iOS App Development",
    description:
      "Designing and developing smooth and efficient iOS applications.",
    icon: AppleIcon, // Replace with the appropriate icon for iOS
    transition: { duration: 0.8, delay: 0.8 },
  },
  {
    title: "Android App Development",
    description: "Creating scalable and feature-rich Android applications.",
    icon: AndroidIcon, // Replace with the appropriate icon for Android if needed
    transition: { duration: 0.8, delay: 1 },
  },
  {
    title: "Front-end Development",
    description:
      "Building interactive and dynamic user interfaces with modern front-end frameworks.",
    icon: ViewQuiltIcon,
    transition: { duration: 0.8, delay: 1.2 },
  },
  {
    title: "Back-end Development",
    description:
      "Developing secure and scalable backend solutions to power your applications.",
    icon: StorageIcon,
    transition: { duration: 0.8, delay: 1.4 },
  },
];

const Services = () => {
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
            viewport={{ amount: 0.5 }} // Once visible, it will trigger animation only once
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>My Services</h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            viewport={{ amount: 0.5 }} // Once visible, it will trigger animation only once
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="divider"></div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ amount: 0.5 }} // Once visible, it will trigger animation only once
            transition={{ duration: 0.8, delay: 0.4 }}
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
                variants={{
                  hidden: { opacity: 0, y: 50 }, // Initial hidden state
                  visible: { opacity: 1, y: 0 }, // Shown state when in view
                  exit: { opacity: 0, y: -20 }, // Disappear when out of view
                }}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ amount: 0.3, once: false }} // Ensure it triggers again when leaving
                transition={service.transition}
                key={service.title}
              >
                <div className="service-card">
                  <div className="service-icon">
                    <Icon />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
