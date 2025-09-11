import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import HomePageScroll from '../components/HomePageScroll';
import moreOptions from '../assets/moreOptions.png';
import bot from '../assets/bot.png';
import start from '../assets/start.png';
import map from '../assets/map.png';
import mapBackground from '../assets/mapBackground.jpg';
import '../styles/HomePage.css';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleABUButton = () => {
    window.open("https://antalya.edu.tr/en", "_blank");
  };

  const handleLMSButton = () => {
    window.open("https://lms.antalya.edu.tr/my/", "_blank");
  };

  const handleUBSButton = () => {
    window.open("https://ubs.antalya.edu.tr//EAF/mysurveys/index", "_blank");
  };

  const handleAssistant = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/assistant');
    }, 300);
  };

  const handleMap = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/map');
    }, 300);
  };

  return (
    <div className={`page-container ${isTransitioning ? 'fade-out' : ''}`}>
      <div className="home-page">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />
        
        <div className="left-section">
          <button 
            className="sidebar-toggle"
            onClick={() => setIsSidebarOpen(true)}
          >
            ☰
          </button>
          <img 
            src={moreOptions}
            alt="more options" 
            className="more-options"
          />
        </div>
        
        <div className="center-section">
          <div className="welcome-container">
            <h1>Hi! this is your University Mentor</h1>
            <p>SAS “Student Assistance System” aims to serve as a mentor
               for students by providing information on various topics such
                as registration, campus navigation, finding advisors, and more. </p>
          </div>
          <div className="homepage-card-container">
            {/* chatbot part */}
            <div className='homepage-chatbot-container'>
              <div className='homepage-chatbot-header'>
                <h2>Hi there!</h2>
                <p>We are here to help you.</p>
                <p>Ask us anything</p>
              </div>
              
              <div className='homepage-chatbot-content'>
                <div className='homepage-chatbot-content-container'>
                  <p className='homepage-chatbot-subtext'>Chat with AI</p>
                  <img src={bot}alt="bot" className="bot-icon" />
                </div>
                <div className="chatbot-divider">
                <svg viewBox="0 0 1200 20"  preserveAspectRatio="none">
                  <path d="M0,10 C400,0 800,20 1200,10 L1200,20 L0,20 Z" fill="#fefefe"/>
                </svg>
              </div>
              </div>

              <div className='homepage-chatbot-btn-container'>
                <button className='homepage-chatbot-start-btn' onClick={handleAssistant}>
                  <img src={start} alt="start" className="start-icon" />
                </button>
              </div>
            </div>

            {/* map part */}
            <div className='homepage-map-container'>

              <div className='map-background-image' 
                style={{ backgroundImage: `url(${mapBackground})` }}>
              </div>

              <div className='homepage-map-header'>
                <h2>Campus Navigation</h2>
                <p>Find your way around campus</p>
                <p>Locate buildings and facilities</p>
              </div>
              
              <div className='homepage-map-content'>
                <div className='homepage-map-content-container'>
                  <p className='homepage-map-subtext'>Interactive Map</p>
                  <img src={map}  alt="map" className="map-icon" />
                </div>
                <div className="map-divider">
                  <svg viewBox="0 0 1200 20" preserveAspectRatio="none">
                    <path d="M0,10 C400,0 800,20 1200,10 L1200,20 L0,20 Z" fill="#fefefe"/>
                  </svg>
                </div>
              </div>

              <div className='homepage-map-btn-container'>
                <button className='homepage-map-start-btn' onClick={handleMap}>
                  <svg className="map-pin-icon" viewBox="0 0 24 24" fill="currentColor">
                    {/* Pin point shadow (subtle) */}
                    <ellipse cx="12" cy="21" rx="4" ry="1.5" fill="rgba(0,0,0,0.2)"/>
                    {/* Main pin shape */}
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0
                    9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="right-section">
          <button className="external-btn abu-btn"onClick={handleABUButton}>
            ABU
          </button>
          <button className="external-btn lms-btn"onClick={handleLMSButton}>
            LMS
          </button>
          <button className="external-btn ubs-btn"onClick={handleUBSButton}>
            UBS
          </button>
        </div>
      </div>
      <HomePageScroll />
    </div>
  );
};

export default HomePage;