import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ChatbotPage from './pages/ChatbotPage';
import Feedback from './pages/Feedback';
import AboutPage from './pages/AboutPage';
import LMSpage from './pages/LMSpage';
import UBSpage from './pages/UBSpage';
import ABUpage from './pages/ABUpage';
import ProspectivePage from './pages/ProspectivePage';
import SASpage from './pages/SASpage';
import BusRoutesPage from './pages/BusRoutesPage';
import StudentBusCardPage from './pages/StudentBusCardPage';
import FAQ from './pages/FAQ';
import Map from './pages/Map';
import Footer from './components/Footer';
import EllipseBackground from './components/EllipseBackground';

import './styles/App.css';
import './styles/index.css';


function App() {
  return (
    <Router>
      <Header />
      <EllipseBackground />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assistant" element={<ChatbotPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lms-info" element={<LMSpage />} />
        <Route path="/ubs-info" element={<UBSpage />} />
        <Route path="/abu-info" element={<ABUpage />} />
        <Route path="/prospective-student" element={<ProspectivePage />} />
        <Route path="/sas-features" element={<SASpage />} />
        <Route path="/bus-routes" element={<BusRoutesPage />} />
        <Route path="/student-bus-card" element={<StudentBusCardPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
