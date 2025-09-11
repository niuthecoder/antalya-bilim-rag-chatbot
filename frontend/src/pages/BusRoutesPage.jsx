import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import journey from '../assets/journey.png';
import { FaChevronUp , FaChevronDown} from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import BusCard from '../components/BusCard';
import '../styles/BusRoutesPage.css';

const BusRoutes = () => {
  const [departure, setDeparture] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [filteredBuses, setFilteredBuses] = useState([]);
  const navigate = useNavigate();

const locations = [
    {area:"Kepez/Antalya", numbers: ['AB07', 'DC79']},
    {area:"Ahatlı/kepez/Antalya", numbers: []},
    {area:"Muratpaşa/Antalya", numbers: ['DC15A', 'DC15']},
    {area:"Konyaaltı/Antalya", numbers: ['SD20', 'DM85']},
    {area:"Lara/Antalya", numbers: ['DM85A', 'DM86']},
    {area:"Meltem/Muratpaşa/Antalya", numbers: ['D19']},
    {area:"Kaleiçi/Antalya", numbers: ['AB07', 'DC79']},
    {area:"Döşemealtı/Antalya", numbers: ['DC15A', 'DC15']}
  ];

  const busData = [
    {number: 'AB07', recommendation: 'Fastest', from: 'Akdeniz Üniversitesi', to: 'Organize sanayi jandarma karakol komutanlığı' , duration: '30 min' , distance: '10 km'},
    {number: 'DC79', recommendation: 'recommended', from: 'Atatürk Devlet Hastanesi', to: 'Organize sanayi jandarma karakol komutanlığı' , duration: '30 min' , distance: '10 km'},
    {number: 'DC15A', recommendation: 'recommended', from: 'Özel Rich Hospital Hastanesi', to: 'Organize sanayi jandarma karakol komutanlığı' , duration: '30 min' , distance: '10 km'},
    {number: 'DC15', recommendation: '-', from: 'Özel Rich Hospital Hastanesi', to: 'Organize sanayi jandarma karakol komutanlığı' , duration: '30 min' , distance: '10 km'},
    {number: 'SD20', recommendation: 'recommended', from: 'Sarısu', to: 'Organize sanayi jandarma karakol komutanlığı' , duration: '30 min' , distance: '10 km'},
    {number: 'DM85', recommendation: '-', from: 'Otogar', to: 'Killik' , duration: '30 min' , distance: '10 km'},
    {number: 'DM85A', recommendation: '-', from: 'Otogar', to: 'Ekşili' , duration: '30 min' , distance: '10 km'},
    {number: 'DM86', recommendation: '-', from: 'Otogar', to: 'Karaveliler' , duration: '30 min' , distance: '10 km'},
    {number: 'D19', recommendation: 'recommended', from: 'Antalya Şehir Hastanesi', to: 'Organize sanayi jandarma karakol komutanlığı' , duration: '30 min' , distance: '10 km'},
  ];

  const busRouteData = [
    {number: 'AB07', route: ['Akdeniz Üniversitesi', 'Atatürk Devlet Hastanesi', 'Organize sanayi jandarma karakol komutanlığı']},
    {number: 'DC79', route: ['Atatürk Devlet Hastanesi', 'Organize sanayi jandarma karakol komutanlığı']},
    {number: 'DC15A', route: ['Özel Rich Hospital Hastanesi', 'Organize sanayi jandarma karakol komutanlığı']},
    {number: 'DC15', route: ['Özel Rich Hospital Hastanesi', 'Organize sanayi jandarma karakol komutanlığı']},
    {number: 'SD20', route: ['Sarısu', 'Organize sanayi jandarma karakol komutanlığı']},
    {number: 'DM85', route: ['Otogar', 'Killik']},
    {number: 'DM85A', route: ['Otogar', 'Ekşili']},
    {number: 'DM86', route: ['Otogar', 'Karaveliler']},
    {number: 'D19', route: ['Antalya Şehir Hastanesi', 'Organize sanayi jandarma karakol komutanlığı']}
  ];


  const toggleDropdown = (e) => {
    e.stopPropagation();
    setShowDropdown(prev => !prev);
  };

  const filteredLocations = locations.filter(location =>
    location.area.toLowerCase().includes(departure.toLowerCase())
  );

  const handleSelect = (area) => {
    setDeparture(area);
    setShowDropdown(false);
  };

  const toggleCardExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  useEffect(() => {
    setFilteredBuses(busData);

    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Filter buses when departure changes
  useEffect(() => {
    if (departure.trim() === '') {
      setFilteredBuses(busData);
      return;
    }

    // Find the first location that matches exactly (case insensitive)
    const selectedLocation = locations.find(loc => 
      loc.area.toLowerCase() === departure.toLowerCase()
    );

    if (selectedLocation && selectedLocation.numbers) {
      const matchingBuses = busData.filter(bus => 
        selectedLocation.numbers.includes(bus.number)
      );
      setFilteredBuses(matchingBuses);
    } else {
      setFilteredBuses([]);
    }
  }, [departure]);


  return (
    <div className="bus-routes-page">
      <div className="bus-title-container">
        <h1 className="bus-title">Find the best bus routes to University</h1>
      </div>
      <div className="search-container">
        <img src={journey}alt="journey" className="journey-icon" />
        <div className="bus-search-bar">
          <div className="dropdown-container" ref={dropdownRef}>
            <div className="input-wrapper">
                
                <IoIosSearch className='bus-search-icon'/>
                
                <input
                type="text"
                placeholder="Select departure location"
                value={departure}
                className="bus-search-input"
                onChange={(e) => {
                    setDeparture(e.target.value);
                }}
                onFocus={() => {
                    setShowDropdown(true)
                }}
                />

                <div className="dropdown-arrow" onClick={toggleDropdown}>
                    {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </div>

            </div>

            {showDropdown && (
              <div className="dropdown-menu">
                {filteredLocations.length > 0 ? (
                  filteredLocations.map((location, index) => (
                    <div 
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleSelect(location.area)}
                    >
                      {location.area}
                    </div>
                  ))
                ) : (
                  <div className="dropdown-item no-results">
                    No locations found
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="destination-bar">
            <span>Antalya Bilim University</span>
          </div>
        </div>
      </div>

      <div className="white-content-section">
        <div className="bus-info-container">
          <h3 className="bus-info-title">Select your suitable bus route</h3>
          <button 
            className="student-card-link"
            onClick={() => navigate('/student-bus-card')}
          >
            Click here for student bus card info <MdKeyboardDoubleArrowRight className="arrows"/>

          </button>
        </div>

        <div className="bus-grid">
          {filteredBuses.length > 0 ? (
            filteredBuses.map((bus, index) => (
              
              <BusCard
                key={bus.number}
                bus={bus}
                isExpanded={expandedCard === index}
                onToggleExpand={() => toggleCardExpand(index)}
                routeData={busRouteData.find(route => route.number === bus.number)?.route || []}
              />
            ))
          ) : (
            <div className="no-buses-message">
              No buses found for {departure}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusRoutes;