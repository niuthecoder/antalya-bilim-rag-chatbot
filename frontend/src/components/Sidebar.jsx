import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icon.png';
import home from '../assets/home.png';
import about from '../assets/about.png';
import generalInfo from '../assets/clipboard.png';
import FAQ from '../assets/faq.png';
import bus from '../assets/bus.png';
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate('/');
    onClose();
  };

  const handleAbout = () => {
    navigate('/about');
    onClose();
  };

  const handleGeneralInfo = () => {
    navigate('/general-info');
    onClose();
  };

  const handleLMS = () => {
    navigate('/lms-info');
    onClose();
  };

  const handleUBS = () => {
    navigate('/ubs-info');
    onClose();
  };

  const handleABU = () => {
    navigate('/abu-info');
    onClose();
  };

  const handleProspectiveStudent = () => {
    navigate('/prospective-student');
    onClose();
  };

  const handleSASFeatures = () => {
    navigate('/sas-features');
    onClose();
  };

  const handleBusRoutes = () => {
    navigate('/bus-routes');
    onClose();
  };

  const handleStudentBusCard = () => {
    navigate('/student-bus-card');
    onClose();
  };

  const handleFAQ = () => {
    navigate('/faq');
    onClose();
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <div className="sidebar-logo-container">
        <img 
          src={logo}
          alt="SAS Logo" 
          className="sidebar-logo"
          onClick={handleHomePage}
        />
        <span className="sidebar-logo-text" onClick={handleHomePage}>SAS</span>
      </div>
      
      <div className="sidebar-content">
        <div className="sidebar-menu">
          <button className="sidebar-nav-btn" onClick={handleHomePage}>
            <img 
            src={home}
            alt="home" 
            className="sidebar-icon"
            />
            Home Page
          </button>

          <div className="sidebar-nav-group">
            <button className="sidebar-nav-btn">
              <img src={generalInfo} alt="general info" className="sidebar-icon"/>
              General Info
            </button>
            <div className="sidebar-submenu">
              <button className="sidebar-sub-btn lms-side-btn" onClick={handleLMS}>
                LMS
              </button>
              <button className="sidebar-sub-btn" onClick={handleUBS}>
                UBS
              </button>
              <button className="sidebar-sub-btn" onClick={handleABU}>
                ABU
              </button>
              <button className="sidebar-sub-btn" onClick={handleProspectiveStudent}>
                 Prospective Student
              </button>
              <button className="sidebar-sub-btn" onClick={handleSASFeatures}>
                SAS Features
              </button>
            </div>
          </div>
          
          <div className="sidebar-nav-group">
            <button className="sidebar-nav-btn" onClick={handleBusRoutes}>
              <img 
              src={bus}
              alt="bus" 
              className="sidebar-icon"
              />
              Bus Routes
            </button>
            <div className="sidebar-submenu">
              <button className="sidebar-sub-btn std-bus-side-btn" onClick={handleStudentBusCard}>
                Student Bus Card
              </button>
            </div>
          </div>
          
          <button className="sidebar-nav-btn" onClick={handleFAQ}>
            <img 
            src={FAQ}
            alt="faq" 
            className="sidebar-icon"
            />
            FAQ
          </button>
          <button className="sidebar-nav-btn" onClick={handleAbout}>
            <img 
            src={about}
            alt="about" 
            className="sidebar-icon"
            />
            About
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;