import { React , useState, useEffect , useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icon.png';
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import '../styles/Header.css';

function Header() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown(prev => !prev);
  };
  
  const handleHomePage = () => {
    navigate('/');
  };

  const handleAssistant = () => {
    navigate('/assistant');
  };

  const handleMap = () => {
    navigate('/map');
  };

  const handlefeedback = () => {
    navigate('/feedback');
  };

  const dropdownRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header-container" ref={dropdownRef}>
      <div className="logo-container" onClick={handleHomePage}>
        <img src={logo} alt="SAS Logo" className="logo"/>
        <span className="logo-text" >SAS</span>
      </div>

      <nav className="nav-buttons">
        <span className="nav-button" onClick={handleHomePage}>
          Home Page
        </span>
        <span className="nav-button" onClick={handleAssistant}>
          Assistant
        </span>
        <span className="nav-button" onClick={handleMap}>
          Map
        </span>
        <span className="nav-button" onClick={handlefeedback}>
          Feedback
        </span>
        <div className="more-container">
        <span 
            className="nav-button more-button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            More 
            <div className="header-dropdown-arrow" onClick={toggleDropdown}>
                {showDropdown ? <TiArrowSortedUp />: <TiArrowSortedDown /> }
            </div>
          </span>
          
          {showDropdown && (
            <div className="header-dropdown-menu">
              <span onClick={handleAssistant}>Assistant</span>
              <span onClick={handleMap}>Map</span>
              <span onClick={handlefeedback}>Feedback</span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;