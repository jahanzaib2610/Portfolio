import React from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CodeIcon from '@mui/icons-material/Code';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import StorageIcon from '@mui/icons-material/Storage';
import './Services.css';

const services = [
  {
    title: 'Website Development',
    description: 'Creating responsive and visually appealing websites tailored to your needs.',
    icon: CodeIcon, // Replace with the appropriate icon if needed
  },
  {
    title: 'Mobile App Development',
    description: 'Building high-quality cross-platform mobile applications using modern frameworks.',
    icon: PhoneIphoneIcon,
  },
  {
    title: 'iOS App Development',
    description: 'Designing and developing smooth and efficient iOS applications.',
    icon: AppleIcon, // Replace with the appropriate icon for iOS
  },
  {
    title: 'Android App Development',
    description: 'Creating scalable and feature-rich Android applications.',
    icon: AndroidIcon, // Replace with the appropriate icon for Android if needed
  },
  {
    title: 'Front-end Development',
    description: 'Building interactive and dynamic user interfaces with modern front-end frameworks.',
    icon: ViewQuiltIcon,
  },
  {
    title: 'Back-end Development',
    description: 'Developing secure and scalable backend solutions to power your applications.',
    icon: StorageIcon,
  },
];


const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-title">
          <h2>My Services</h2>
          <div className="divider"></div>
          <p>
            I offer a wide range of services to help bring your digital ideas to life
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="service-card">
                <div className="service-icon">
                  <Icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;