// src/components/FAQ/FAQ.jsx
import { useState } from 'react';
import '../styles/FAQpage.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How can I transfer my deposit or semester fee?",
      answer: "You can transfer your deposit fees from any bank in your country and make sure your bank can transfer dollars and euros to foreign banks. If you are in Turkey, you can make a transfer from any nearby Vakıfbank branch using your Turkish ID number. Please don't forget to specify your Name and Surname when making the transaction."
    },
    {
      question: "How and where can I get my Equivalence Certificate (Bachelor's candidate)?",
      answer: "High School Diploma Equivalence Certificate can be obtained from any Ministry of National Education branch in Turkey or from the Turkish Embassy in your country. Required documents: Original High School Diploma must be translated into Turkish and notarized. Original High School Transcript (last 2 years) must be translated into Turkish and notarized. Passport copy. Application Form. https://edenklik.meb.gov.tr/Home/OnlineBasvuru?culture=tr-TR"
    },
    {
      question: "When and where can I get my Student ID Card (Bachelor students)?",
      answer: "You can get your card within 2 weeks after completing your registration from the Student Affairs Office (main campus)."
    },
    {
      question: "Are there any requirements to maintain the scholarship (Bachelor students)?",
      answer: "As stated at the bottom of your scholarship information, you need to maintain a GPA above 2.5 to continue your scholarship."
    },
    {
      question: "What are the benefits of the student ID card?",
      answer: "You can use it for university entrance and exit, in the cafeteria, library, student bus card, and for special discounts at stores outside campus for ABU students."
    },
    {
      question: "What should I do if I lose my Student ID Card?",
      answer: "Pay 250 TL at the finance office and bring the receipt to student affairs to get your new ID card."
    },
    {
      question: "What should I do if I want to cancel my registration at the university?",
      answer: "Fill out the withdrawal form from student affairs. You need to get signatures from all relevant departments mentioned in the form. After getting all signatures, submit the form to student affairs to receive all your original documents and finalize your cancellation."
    },
    {
      question: "Where and how can I apply for a Residence Permit?",
      answer: "You can apply online from the International Student Office (main campus) or International Relations office (Markantalya campus)."
    },
    {
      question: "How can I change my department?",
      answer: "You can change your department by canceling your registration and applying again as a new student."
    },
    {
      question: "When and how can I transfer courses I took from another university?",
      answer: "Only after acceptance and registration. The process takes 2-3 weeks."
    },
    {
      question: "When can I register for bachelor's programs or English prep school?",
      answer: "Only once a year in the fall semester!"
    },
    {
      question: "When can I register for English/Turkish courses?",
      answer: "Depending on the number of applications, in fall, spring and summer."
    },
    {
      question: "What are the dormitory fees for male/female students?",
      answer: "Prices vary depending on room capacity."
    },
    {
      question: "How can I get a refund if my visa is rejected?",
      answer: "If your visa is rejected, you will receive an official letter from the Turkish Embassy. You need to send the filled forms from the finance office along with your passport to iso@antalya.edu.tr. The process takes about 6 weeks after registration."
    },
    {
      question: "Can I leave the country if I've applied for a residence permit but haven't received my card yet?",
      answer: "When you apply for residence before getting the card, the immigration office will give you a Residence Certificate that allows you to travel for only 15 days."
    },
    {
      question: "What is the semester freeze process and how much does it cost?",
      answer: "The freeze process has a specific period mentioned in the Academic Calendar. Students must fill out a petition and state the reason for freezing. You need to pay 1/3 of the total fee to freeze your semester."
    },
    {
      question: "What happens if I don't renew my registration?",
      answer: "Your university account will be in debt, the university will automatically send an email to the immigration office, and your residence permit will be canceled."
    },
    {
      question: "How do I know if my university is accredited in Turkey (Master's candidate)?",
      answer: "You can login to e-government: https://www.turkiye.gov.tr/yok-okul-tanima-belgesi-sorgulama Or email us at iso@antalya.edu.tr."
    },
    {
      question: "Where can I get my equivalence certificate (Main applicant)?",
      answer: "Apply to the Council of Higher Education (YÖK/HEK) in Ankara. Required documents: Application Form. Passport copy. Payment receipt."
    },
    {
      question: "When can I get my Student ID Card (Master's students)?",
      answer: "You can get your student card from the Marantalya 7th floor Institute Secretary or contact us."
    },
    {
      question: "When can I get admission to master's programs?",
      answer: "Twice a year in fall and spring semesters."
    },
    {
      question: "Where can I get the student certificate (Master's students)?",
      answer: "Marantalya 7th floor Institute Secretary."
    }
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span className="faq-toggle">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;