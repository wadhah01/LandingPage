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
  
        <section id="installation" className="installation-section">
  <h2>Installation</h2> {/* Title at the top center */}
  <div className="installation-content">
    <div className="installation-text">
      <h3>Installation Made Easy!</h3>
      <p>
        Integrating HelloMyBot into your project is straightforward and hassle-free. You don’t need to modify your existing setup; simply duplicate the chatbot instance and choose the platform you want to deploy it on.
      </p>
      <h4>Key Benefits:</h4>
      <ul>
        <li><strong>Seamless Integration:</strong> No need for complex changes—just plug and play!</li>
        <li><strong>Multi-Platform Support:</strong> Use HelloMyBot across various platforms effortlessly.</li>
        <li><strong>Comprehensive Guidance:</strong> Our detailed guides will help you through every step of the integration process, ensuring a smooth transition into production.</li>
      </ul>
      <p>
        **Explore our <a href="#integration-partners">Integration Partners</a>** section to see how HelloMyBot can work with different platforms.
      </p>
    </div>
    <div className="installation-image">
      <div className="photo-placeholder"></div> {/* Image placeholder */}
    </div>
  </div>
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
