import React from 'react';
import '../styles/ABUpage.css';

// Import ABU images
import abuLogin from '../assets/abu-login.jpg';
import abuDashboard from '../assets/ubs-login.jpg';
import abuCampusLife from '../assets/abu-campus-life.jpg';
import abuEvents from '../assets/abu-events.png';
import abuDiscover from '../assets/abu-discover.png'; 
// import abuLibrary from '../assets/abu-library.jpg';
// import abuTransport from '../assets/abu-transport.jpg';
import abuAnnouncements from '../assets/abu-announcements.png'
import abuExamSchedules from '../assets/abu-exam-schedules.png'
import abuFastAccess from '../assets/abu-fast-access.png'
import abuAcademicCalendar from '../assets/abu-academic-calendar.png'
import abuErasmus from '../assets/abu-erasmus.png'

const ABUpage = () => {
  const steps = [
    {
      title: "1. Access ABU Portal",
      description: "Go to abu.antalya.edu.tr and click on the 'Login UBS' button at top-right to login with your student credentials to access UBS.",
      images: [
        { src: abuLogin, alt: "ABU Home Page" },
        { src: abuDashboard, alt: "UBS Page" }
      ]
    },
    {
      title: "2. Announcements",
      description: "When you scroll down, you'll find the announcements section, where you can check important updates like exam dates, Erasmus opportunities, and more.",
      images: [
        { src: abuAnnouncements, alt: "Announcements Section" },
        { src: abuExamSchedules, alt: "Exam Schedules" }
      ]
    },
    {
      title: "3. Fast Access & Academic Calendar",
      description: "When you hover over the 'Fast Access' section, you can quickly navigate to UBS or LMS and find information about the academic calendar, library, faculties, etc.",
      images: [
        { src: abuFastAccess, alt: "Fast Access Section" },
        { src: abuAcademicCalendar, alt: "Academic Calendar" }
      ]
    },
    {
      title: "4. Erasmus",
      description: "When you hover over the 'International' or 'Student' section, you can find the Erasmus information page, where you can learn everything related to Erasmus opportunities and procedures.",
      images: [
        { src: abuErasmus, alt: "Erasmus Page" }
      ]
    },
    {
      title: "5. Campus Life & Events",
      description: "Explore the website to access campus life, events, facilities, academic staff, and many more.",
      images: [
        { src: abuDiscover, alt: "Campus Life Section" },
        { src: abuEvents, alt: "University Events Calendar" }
      ]
    },
  ];

  return (
    <div className="abu-tutorial">
      <header className="tutorial-header">
        <h1>ABU Student Portal Guide</h1>
        <p className="subtitle">Complete guide to Antalya Bilim University's digital services</p>
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

      <div className="quick-tips">
        <h3>ABU Student Tips</h3>
        <ul>
          <li>Check the announcements daily for important updates</li>
          <li>Use the mobile app for quick access to services</li>
        </ul>
      </div>
    </div>
  );
};

export default ABUpage;