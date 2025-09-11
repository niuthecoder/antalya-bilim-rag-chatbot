import React from 'react';
import '../styles/LMSpage.css';

import lmsLogin from '../assets/lms-login.jpg';
import lmsSignin from '../assets/lms-webpage.jpg';
import lmsDashboard from '../assets/lms-dashboard.jpg';
import lmsCourse from '../assets/lms-course.jpg';
import lmsSearch from '../assets/lms-choosing-course.jpg';

const LMSpage = () => {
  const steps = [
    {
      title: "1. Login/Signin to LMS",
      description: "Go to lms.antalya.edu.tr and click on login or signin at the top right of the page, then enter your student credentials (username and password)",
      images: [
        { src: lmsSignin, alt: "LMS Homepage" },
        { src: lmsLogin, alt: "Login Screen" }
      ]
    },
    {
      title: "2. Navigate Dashboard",
      description: "After entering your credentials, you'll see the dashboard. To add courses, click the navbar icon at the top left and select 'Site Home' from the sidebar menu.",
      images: [
        { src: lmsDashboard, alt: "Dashboard View" }
      ]
    },
    {
      title: "3. Access Course Materials",
      description: "Scroll down to find the search bar. You can search by course name or key, then click any course to view lectures, assignments, and resources or enroll.",
      images: [
        { src: lmsSearch, alt: "Course Search" },
        { src: lmsCourse, alt: "Course Materials" }
      ]
    }
  ];

  return (
    <div className="lms-tutorial">
      <header className="tutorial-header">
        <h1>LMS User Guide</h1>
        <p className="subtitle">Step-by-step instructions with visuals</p>
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
        <h3>Quick Tips</h3>
        <ul>
          <li>Download materials for offline studying</li>
          <li>Set calendar reminders for assignment deadlines</li>
        </ul>
      </div>
    </div>
  );
};

export default LMSpage;