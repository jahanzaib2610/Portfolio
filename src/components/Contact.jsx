import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./Contact.css";
import { ThreeDot } from "react-loading-indicators";
import { motion } from "framer-motion";

const Contact = () => {
  const [alertVisile, setAlertVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any required field is empty
    if (
      !formData.senderName &&
      !formData.senderEmail &&
      !formData.subject &&
      !formData.message
    ) {
      setAlertSeverity("error");
      setAlertMessage("Please enter data in the required fields.");
      setAlertVisible(true);
      return;
    }
    if (!formData.senderName) {
      setAlertSeverity("error");
      setAlertMessage("Please enter your name.");
      setAlertVisible(true);
      return;
    }

    if (!formData.senderEmail) {
      setAlertSeverity("error");
      setAlertMessage("Please enter your email.");
      setAlertVisible(true);
      return;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.senderEmail)) {
      setAlertSeverity("error");
      setAlertMessage("Please enter a valid email address.");
      setAlertVisible(true);
      return;
    }

    if (!formData.subject) {
      setAlertSeverity("error");
      setAlertMessage("Please enter a subject.");
      setAlertVisible(true);
      return;
    }

    if (!formData.message) {
      setAlertSeverity("error");
      setAlertMessage("Please enter a message.");
      setAlertVisible(true);
      return;
    }

    // Handle form submission
    console.log(formData);
    setIsDisabled(true);
    try {
      // Make the fetch request
      const response = await fetch(
        "https://portfolio-backend-pi-eosin.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Handle non-2xx responses (like 400, 500, etc.)
      if (!response.ok) {
        const result = await response.json();
        setAlertSeverity("error");
        setAlertMessage(
          `Failed to send Message! ${result.error || "Unknown error"}`
        );
        setAlertVisible(true);
        setIsDisabled(false);
        return;
      }

      // Handle success
      setFormData({
        senderName: "",
        senderEmail: "",
        subject: "",
        message: "",
      });
      setAlertSeverity("success");
      setAlertMessage("Message sent successfully!");
      setAlertVisible(true);
      setIsDisabled(false);
    } catch (error) {
      // Handle network errors or other issues
      setAlertSeverity("error");
      setAlertMessage(
        `Failed to send Message! Network Error: ${error.message}`
      );
      setAlertVisible(true);
      setIsDisabled(false);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertVisible(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }} // Once visible, it will trigger animation only once
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <h2>Get in Touch</h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }} // Once visible, it will trigger animation only once
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <div className="divider"></div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }} // Once visible, it will trigger animation only once
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <p>
              Have a project in mind? Let's work together to create something
              amazing
            </p>
          </motion.div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <Mail />
                <span>jahanzaib2610@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone />
                <span>+92 318 2425007</span>
              </div>
              <div className="contact-item">
                <MapPin />
                <span>Lahore, Pakistan</span>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a
                  href="https://github.com/jahanzaib2610"
                  className="social-icon"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jahanzaib2610/"
                  className="social-icon"
                >
                  <Linkedin size={24} />
                </a>
                <a href="/" className="social-icon">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="senderName"
                value={formData.senderName}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="senderEmail"
                value={formData.senderEmail}
                onChange={handleChange}
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
              ></textarea>
            </div>
            <button
              disabled={isDisabled}
              type="submit"
              className="submit-button"
            >
              {isDisabled ? (
                <ThreeDot variant="bounce" color="#32cd32" size="small" />
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
      <Snackbar
        open={alertVisile}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={alertSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
