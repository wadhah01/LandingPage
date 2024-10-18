// Documentation.jsx
import React from 'react';
import './documentation.css';
import chatbot1 from '../images/chat1.jpg'; 
const Documentation = () => {
    return (
      <div className="documentation">
        <section id="introduction" className="introduction-section">
          <div className="introduction-content">
            <h2 style={{marginBottom:80}}>Introduction</h2>
            <p>Welcome to the <strong>HelloMyBot</strong> documentation! <br />
              <strong>HelloMyBot</strong> is an innovative chatbot designed to transform customer support through instant, 24/7 assistance.
            </p>
            <h3>Key Features</h3>
            <ul>
              <li><strong>Intelligent Responses:</strong> Leverages natural language processing for seamless interactions.</li>
              <li><strong>Cross-Platform Integration:</strong> Easily integrates with websites, messaging apps, and more.</li>
              <li><strong>Data Insights:</strong> Gain valuable analytics on user interactions to improve service.</li>
            </ul>
            <p>Explore this documentation to unlock the full potential of <strong>HelloMyBot</strong>!</p>
          </div>
          <div className="introduction-image">
            <img src={chatbot1} alt="HelloMyBot" />
          </div>
        </section>
  
        <section id="installation">
          <h2>Installation</h2>
          <p>Follow these steps to install the project...</p>
        </section>
  
        <section id="usage">
          <h2>Usage</h2>
          <p>Here's how you can use the application...</p>
        </section>
  
        <section id="api-reference">
          <h2>API Reference</h2>
          <p>Details about the API...</p>
        </section>
  
        <section id="configuration">
          <h2>Configuration</h2>
          <p>Configuration options...</p>
        </section>
  
        <section id="contributing">
          <h2>Contributing</h2>
          <p>Guidelines for contributing...</p>
        </section>
  
        <section id="license">
          <h2>License</h2>
          <p>This project is licensed under the MIT License.</p>
        </section>
  
        <section id="faqs">
          <h2>FAQs</h2>
          <p>Common questions and answers...</p>
        </section>
  
        <section id="contact">
          <h2>Contact</h2>
          <p>For questions, reach out at [email/contact].</p>
        </section>
      </div>
    );
};

export default Documentation;
