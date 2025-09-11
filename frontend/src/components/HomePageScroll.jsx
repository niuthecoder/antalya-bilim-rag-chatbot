import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import parralaxABU from '../assets/parallaxABU.jpg';
import graduatesABU from '../assets/graduatesABU.jpg';
import '../styles/HomePageScroll.css';


const HomePageScroll = () => {
    const navigate = useNavigate();

    const handleFAQ = () => {
        navigate('/faq');
        onClose();
    };

    const handleAbout = () => {
        navigate('/about');
        onClose();
    };

  return (
    <div className="home-page-scroll">
        <section id="homepageAbout" className="homepageAbout section">
        <div className="image" style={{ backgroundImage: `url(${graduatesABU})` }}></div>
        <div className="content" data-aos="fade-up">
            <div className="text">
            <h2>About</h2>
            <p>
            We created the Student Assistance System because navigating university life can be overwhelming – between finding classrooms, locating professors' offices, and understanding administrative processes, students lose precious time that should be spent learning.
            </p>
            <p>
            Our AI-powered chatbot and interactive map solve this by providing instant, multilingual access to campus information, because every student deserves to focus on their education, not logistics.
            </p>
            </div>
            <button className="button-container" onClick={handleAbout}>LEARN MORE</button>
        </div>
        </section>
        


        <section id="parallax1" className="parallax1 section" style={{ backgroundImage: `url(${parralaxABU})` }}>
        <div>
            <p></p>
        </div>
        </section>



        <section id="homepageABU" className="homepageABU section">
        <div className="text" data-aos="fade-up">
            <h2>Antalya Bilim University</h2>
            <p>Antalya Bilim University provides education to 8408 students with a teaching-focused 
                approach. The university includes the Faculty of Dentistry, the Faculty of Fine Arts 
                and Architecture, the Faculty of Law, the Faculty of Economics, Administrative and 
                Social Sciences, the Faculty of Engineering and Natural Sciences, the Faculty of 
                Health Sciences, the Faculty of Tourism, the Vocational School, the Vocational School 
                of Health Services, the School of Civil Aviation, and the School of Foreign Languages, 
                comprising a total of 7 faculties and 4 schools. Our university contributes to education 
                with 19 undergraduate, 16 associate degree, 21 master's, and 2 doctoral programs. Antalya 
                Bilim University ranks 10th on the list of Turkey's Patent Champion Universities.</p>
        </div>
        <button className="button-container" onClick={handleFAQ}>LEARN MORE</button>
        </section>
    </div>
  );
};

export default HomePageScroll;