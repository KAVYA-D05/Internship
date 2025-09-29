import React from "react";
import Layout from "./Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard-container">
        <h1>Welcome to Internship Portal</h1>
        <p className="dashboard-text">
          Explore internships, manage your profile, and stay updated!
        </p>

        {/* Slider */}
        <div className="slider">
          <div className="slide-track">
            {[
              { title: "Problem Statement", text: "Prashiskshan - An app for Academia Industry Interface to bridge the gap between students, colleges, and industry." },
              { title: "Background", text: "Lack of industry tie-ups, poor planning, and fake internships reduce student career readiness." },
              { title: "NEP 2020", text: "Semester 5 internships focus on experiential learning, skill readiness, and career exploration." },
              { title: "Proposed Solution", text: "A centralized platform for internships, skill training, logbooks, reports, and credit integration." },
              { title: "Expected Outcomes", text: "Streamlined process, stronger industry connect, better faculty involvement, and authentic reports." },
            ].map((slide, i) => (
              <div className="slide" key={i}>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info Sections */}
        <div className="info-section">
          <h2>What is Internship?</h2>
          <p>An internship is a structured program that allows students to gain practical experience in their field of study. It bridges the gap between academic learning and professional work environments.</p>
        </div>

        <div className="info-section">
          <h2>Uses of Internship</h2>
          <ol>
            <li>Enhances practical knowledge and skill development.</li>
            <li>Provides industry exposure and real-world experience.</li>
            <li>Helps in career exploration and networking.</li>
            <li>Boosts employability and placement opportunities.</li>
          </ol>
        </div>

        <div className="info-section">
          <h2>Guidelines</h2>
          <ol>
            <li>Choose internships relevant to your field of study.</li>
            <li>Maintain professionalism and punctuality.</li>
            <li>Complete assigned tasks sincerely.</li>
            <li>Document your work for academic credits.</li>
            <li>Seek feedback and improve continuously.</li>
          </ol>
        </div>
      </div>

      <style>{`
        .dashboard-container {
          font-family: Arial, sans-serif;
        }

        .dashboard-text {
          width: 85%;
          margin: 20px auto;
          text-align: left;
        }

        /* Slider */
        .slider {
          margin: 30px auto;
          overflow: hidden;
          width: 90%;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .slide-track {
          display: flex;
          width: calc(300px * 5);
          animation: scroll 20s linear infinite;
        }
        .slide {
          width: 300px;
          flex-shrink: 0;
          padding: 20px;
          margin: 15px;
          border-radius: 10px;
          background: #b8da90ff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .slide h3 { margin-bottom: 10px; color: #1e3c72; }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-300px * 5)); }
        }

        /* Info Sections */
        .info-section {
          width: 85%;
          margin: 30px auto;
          padding: 20px;
          text-align: left; /* Align all content to left */
          background: #c7e4e7ff;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(215, 173, 173, 0.1);
        }
        .info-section h2 { color: #1e3c72; margin-bottom: 10px; }
        .info-section p, 
        .info-section ul, 
        .info-section ol { 
          font-size: 16px; 
          line-height: 1.6; 
          color: #333; 
          margin-left: 20px; /* All lists aligned */
        }
        .info-section ul, .info-section ol { padding-left: 0; } /* Reset default padding */
      `}</style>
    </Layout>
  );
};

export default Dashboard;
