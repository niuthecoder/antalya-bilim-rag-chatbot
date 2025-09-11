import React from "react";
import "../styles/StudentBusCardPage.css";
import appIcon from "../assets/antalya-kart-icon.png";
import studentCardImg from "../assets/student-card.png";
import cardMachineImg from "../assets/card-machine.jpg";

const StudentBusCard = () => {
  return (
    
      <div className="student-bus-card-header">
        <header className="bus-card-header">
          <h1>Student Bus Card</h1>
          <p className="subtitle">Everything you need to know about it</p>
        </header>

      <section className="card-info">
        <h2>What is the Student Bus Card?</h2>
        <div className="card-details">
          <img src={studentCardImg} alt="Student Bus Card" />
          <p>
            The Student Bus Card offers discounted fares for students in Antalya.
            Compared to the regular card, students benefit from much lower prices
            and more affordable travel. Below, you can find the comparison of a normal and a student card.
          </p>
        </div>

        <div className="card-comparison">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Normal Card</th>
                <th>Student Card</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fare per ride</td>
                <td>27 TL</td>
                <td>12 TL</td>
              </tr>
              <tr>
                <td>Annual renewal required</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
        </div>
        </section>

        <section className="card-info">
        <div className="how-to-apply">
          <h2>📋 How to Apply</h2>
          <p>
            Go to an{" "}
            <a href="https://www.antalyakart.com.tr/Page/KartMerkezleri" target="_blank" rel="noreferrer">
              Antalya Kart Center.
            </a>{" "}
          </p>
          <ul>
            <li>Needed documents:</li>
            <li>1. Student certificate or school registration</li>
            <li>2. Turkish ID or Residence Permit</li>
            <li>3. Passport-size photo</li>
          </ul>
        </div>
        </section>

        <section className="card-info">
        <div className="renewal">
          <h2>🔄 Annual Renewal</h2>
          <p>
            You must update your student status every year using a valid student certificate.
            This can be done at a card center.
          </p>
        </div>
      </section>

      <section className="app-download">
        <h2>📱 AntalyaKart App Download</h2>
        <img src={appIcon} alt="AntalyaKart App Icon" />
        <p>Download the official AntalyaKart app:</p>
        <div className="download-links">
          <a href="https://play.google.com/store/apps/details?id=kentkart.mobile.antalyakart&hl=tr" target="_blank" rel="noreferrer">
            Google Play
          </a>
          <a href="https://apps.apple.com/tr/app/antalyakart/id1076290540?l=tr" target="_blank" rel="noreferrer">
            App Store
          </a>
        </div>
      </section>

      <section className="app-usage">
        <h2>🧭 How to Use the AntalyaKart App</h2>
        <ul>
          <li>Tap on the search box</li>
          <li>Enter the bus number (e.g., AB07)</li>
          <li>Click on it to check schedule and stops</li>
          <li>Check card balance under <strong>"Card Operations"</strong></li>
          <li>Then, recharge via <strong>"Online Charge"</strong> button</li>
        </ul>
        </section>

        <section className="card-info">
        <h2>📍 Street Recharge Machines</h2>
        <p>You can also top up your card at machines near main stations:</p>
        <img src={cardMachineImg} alt="Card Recharge Machine" />
      </section>
    </div>
  );
};

export default StudentBusCard;
