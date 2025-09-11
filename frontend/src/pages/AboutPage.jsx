import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  const teamMembers = [
    { name: "Salma Rashty", role: "Developer" },
    { name: "Hafize Yağmur Ulukaya", role: "Developer" },
    { name: "Niyousha Khodashenasabadi", role: "Developer" },
    { name: "Fadime Yaren Durmuş", role: "Developer" }
  ];

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>STUDENT ASSISTANCE SYSTEM</h1>
        <div className="divider"></div>
        <p className="subtitle">Enhancing Your Academic Journey</p>
      </header>

      <section className="mission-section">
        <h2 style={{color: 'black' }}>Our Mission🐦‍🔥</h2>
        <div className="mission-card">
          <p className="mission-statement">

    <strong>What we do / Why we do it👾</strong><br />
    We created the Student Assistance System because navigating university life can be overwhelming – 
    between finding classrooms, locating professors' offices, and understanding administrative processes, 
    students lose precious time that should be spent learning. Our AI-powered chatbot and interactive map 
    solve this by providing instant, multilingual access to campus information, because every student deserves 
    to focus on their education, not logistics.

         </p>

        </div>
      </section>

      <section className="team-section">
        <h2>The SAS Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-id">{member.id}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="values-section">
        <h2>Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <span>🌐</span>
            <h3>Accessibility</h3>
            <p>Multilingual support for all students</p>
          </div>
          <div className="value-card">
            <span>⚡</span>
            <h3>Efficiency</h3>
            <p>Instant answers to campus queries</p>
          </div>
          <div className="value-card">
            <span>🧭</span>
            <h3>Navigation</h3>
            <p>Seamless wayfinding across campus</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;