import React from 'react';
import '../styles/ProspectivePage.css';

// Import Prospective images
import prospectiveAccess  from '../assets/prospective-access-button.png';
import prospectiveHomePage from '../assets/prospective-home-page.png';
import prospectivePrograms1 from '../assets/prospective-programs1.png';
import prospectivePrograms2 from '../assets/prospective-programs2.png';
import prospectiveCampus from '../assets/prospective-campus.png';
import prospectiveTuition from '../assets/prospective-tuition.png';

const ProspectivePage = () => {
  const steps = [
    {
      title: "1. Admissions Process",
      description: "Simply click the 'Prospective Students' button in the top right corner of the official ABU website, where you'll find all the information you need about the admission process.",
      images: [
        { src: prospectiveAccess, alt: "Prospective Student Button" },
        { src: prospectiveHomePage, alt: "Home Page" }
      ]
    },
    {
      title: "2. Programs & Majors",
      description: "ABU offers a wide range of programs and majors for you to explore! Be sure to read through the details carefully to make an informed choice.",
      images: [
        { src: prospectivePrograms1, alt: "Undergraduate Departments " },
        { src: prospectivePrograms2, alt: "Associate Degree Departments" }
      ]
    },
    {
      title: "3. Campus",
      description: "ABU has three campuses. The main campus in Döşemealtı is where you’ll find undergraduate programs, the Erasmus coordinator, international office, and more. The Markantalya campus is for graduate students, and the Güllük campus is where students take English preparatory courses. For more information, check the 'Why ABU?' and 'Why Antalya' sections.",
      images: [
        { src: prospectiveCampus, alt: "Campus Info" }
      ]
    },
    {
      title: "4. Tuition Fees and Scholarships",
      description: "Using the Quick Menu at the top, you can easily find information on tuition fees and scholarship opportunities.",
      images: [
        { src: prospectiveTuition, alt: "Scholarships Info" }
      ]
    },
  ];

  return (
    <div className="prospective-tutorial">
      <header className="tutorial-header">
        <h1>Prospective Student</h1>
        <p className="subtitle">Comprehensive Guide for Incoming Students</p>
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
        <h3>Tips for Prospective Students</h3>
        <ul>
          <li>If possible, visit the campus to get a feel for the environment.</li>
          <li>Reach out to current students or alumni to get their perspectives.</li>
          <li>Double-check deadlines and prepare your application early.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProspectivePage;