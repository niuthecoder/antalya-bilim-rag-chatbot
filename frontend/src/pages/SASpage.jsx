import React from 'react';
import '../styles/SASpage.css';

import sasChatbot from '../assets/sas-chatbot.jpg';
import sasMap from '../assets/sas-map.jpg';
import sasFeedback from '../assets/sas-feedback.jpg';
import sasGeneralInfo from '../assets/sas-general-info.jpg';
import sasBus from '../assets/sas-bus.jpg';
import sasUBS from '../assets/sas-ubs-dashboard.jpg';
import sasLMS from '../assets/sas-lms-dashboard.jpg'; 

const SASpage = () => {
  const steps = [
    {
      title: "1. AI Chatbot",
      description: "Access our 24/7 AI chatbot for instant answers to common questions about student services and campus life",
      images: [
        { src: sasChatbot, alt: "AI Chatbot Interface" }
      ]
    },
    {
      title: "2. Campus Map",
      description: "Interactive map showing all campus buildings, facilities, and important locations with real-time navigation",
      images: [
        { src: sasMap, alt: "Interactive Campus Map" }
      ]
    },
    {
      title: "3. Feedback System",
      description: "Provide feedback about university services and facilities through our confidential feedback portal",
      images: [
        { src: sasFeedback, alt: "Feedback Submission" },
      ]
    },
    {
      title: "4. University Systems",
      description: "Quick access to all university systems from one convenient location",
      images: [
        { src: sasUBS, alt: "UBS System" },
        { src: sasLMS, alt: "LMS System" }
      ]
    },
    {
      title: "5. Bus Routes",
      description: "Real-time campus shuttle bus tracking with schedules and route information",
      images: [
        { src: sasBus, alt: "Campus Bus Routes" }
      ]
    }
  ];

  return (
    <div className="sas-tutorial">
      <header className="tutorial-header">
        <h1>Student Support Services</h1>
        <p className="subtitle">Your complete guide to university resources</p>
      </header>

      <main className="tutorial-steps">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-text">
              <h2>
                <span className="step-number">{index + 1}</span>
                {step.title}
              </h2>
              <p>{step.description}</p>
            </div>
            
            <div className={`step-visuals ${step.images.length === 1 ? 'single-image' : ''}`}>
              {step.images.map((img, imgIndex) => (
                <div key={imgIndex} className="image-container">
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="tutorial-image"
                  />
                  <p className="image-caption">Fig {index + 1}.{imgIndex + 1}: {img.alt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default SASpage;