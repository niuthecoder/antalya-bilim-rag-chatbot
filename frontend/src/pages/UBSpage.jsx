import React from 'react';
import '../styles/UBSpage.css';

// Import UBS images
import ubsLogin from '../assets/ubs-login.jpg';
import ubsCourseSelection from '../assets/ubs-course-selection.jpg';
import ubsPaymentNotice from '../assets/ubs-payment-notice.jpg';
import ubsStudentInfo from '../assets/ubs-student-info.jpg';
import ubsTranscript from '../assets/ubs-transcript.jpg';
import ubsFeePayment from '../assets/ubs-fee-payment.jpg';
import ubsScholarship from '../assets/ubs-scholarship.png';

const UBSpage = () => {
  const steps = [
    {
      title: "1. Login to UBS",
      description: "Go to ubs.antalya.edu.tr and enter your student credentials (username and password).",
      images: [
        { src: ubsLogin, alt: "UBS Login Page" }
      ]
    },
    {
      title: "2. Course Selection",
      description: "To select courses for your following semester: Click the sidebar at the top left, select 'Course Selection and Registration Renewal'. You'll either see your available options or a red notice if fees are unpaid or you're outside the registration period.",
      images: [
        { src: ubsCourseSelection, alt: "Course Selection Page" },
        { src: ubsPaymentNotice, alt: "Example Notice Warning" }
      ]
    },
    {
      title: "3. View Student Information",
      description: "In the sidebar under 'Student Info Display': You can see the courses you are taking this semester. To view your weekly schedule click on the purple button. Click the blue button to download your detailed transcript.",
      images: [
        { src: ubsStudentInfo, alt: "Student Information Page" },
        { src: ubsTranscript, alt: "Example Weekly Schedule View" }
      ]
    },
    {
      title: "4. Fee Payment",
      description: "In the sidebar under 'Student Education Fee Operations': Pay your semester fees through the payment portal(the Ödeme YAP button at left).",
      images: [
        { src: ubsFeePayment, alt: "Fee Payment Page" }
      ]
    },
    {
      title: "5. Scholarship Application",
      description: "On the sidebar, you can click the 'Burs Başvurusu' button to apply for a scholarship. Please note that there's a specific application period, if you miss it, you'll receive a red warning notice.",
      images: [
        { src: ubsScholarship, alt: "Scholarship Application Page" }
      ]
    }
  ];

  return (
    <div className="ubs-tutorial">
      <header className="tutorial-header">
        <h1>UBS System Guide</h1>
        <p className="subtitle">Step-by-step instructions for university business system</p>
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
        <h3>UBS Pro Tips</h3>
        <ul>
          <li>Course selection opens/closes on specific dates - check academic calendar</li>
          <li>Unpaid fees will block registration - pay at least 24h before deadlines</li>
          <li>Download your transcript after each semester for records</li>
          <li>Use the 'Print Preview' option for official documents</li>
        </ul>
      </div>
    </div>
  );
};

export default UBSpage;