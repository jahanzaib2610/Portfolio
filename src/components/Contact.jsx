import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./Contact.css";
import { ThreeDot } from "react-loading-indicators";
import { motion } from "framer-motion";
import tune from "../assets/notify.mp3";
import emailjs from "@emailjs/browser";

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

    // Handle form submission via EmailJS directly from frontend
    setIsDisabled(true);
    try {
      const templateParams = {
        senderName: formData.senderName,
        senderEmail: formData.senderEmail,
        subject: formData.subject,
        message: formData.message,
        // Recipient address where you receive the email:
        to_email: "jahanzaib2610@gmail.com",
        to_name: "Jahan Zaib",
        recipient: "jahanzaib2610@gmail.com",
        recipient_email: "jahanzaib2610@gmail.com",
        // Common EmailJS aliases to support any template configuration:
        from_name: formData.senderName,
        from_email: formData.senderEmail,
        user_name: formData.senderName,
        user_email: formData.senderEmail,
        reply_to: formData.senderEmail,
      };

      await emailjs.send(
        "service_lhee715",
        "template_9h2krlp",
        templateParams,
        "NVJuh4hO19nRROPXo"
      );

      // Handle success
      setFormData({
        senderName: "",
        senderEmail: "",
        subject: "",
        message: "",
      });
      audio.loop = false;
      audio.play();
      setAlertSeverity("success");
      setAlertMessage("Message sent successfully!");
      setAlertVisible(true);
      setIsDisabled(false);
    } catch (error) {
      console.error("EmailJS send error:", error);
      setAlertSeverity("error");
      setAlertMessage(
        `Failed to send Message! ${error?.text || error?.message || "Unknown error"}`
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
  const audio = new Audio(tune);
  audio.loop = true;
  return (
    <section
      id="contact"
      className="section contact"
      style={{ overflow: "hidden" }}
    >
      <div className="container">
        <div className="section-title">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            viewport={{ amount: 0.2, once: true }} // Once visible, it will trigger animation only once
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Get in Touch</h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            viewport={{ amount: 0.2, once: true }} // Once visible, it will trigger animation only once
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="divider"></div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ amount: 0.2, once: true }} // Once visible, it will trigger animation only once
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Have a project in mind? Let's work together to create something
              amazing
            </p>
          </motion.div>
        </div>

        <div className="contact-grid">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ amount: 0.2, once: true }} // Once visible, it will trigger animation only once
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ amount: 0.2, once: true }} // Once visible, it will trigger animation only once
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
          </motion.div>
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
