import React from "react";
import "./About.css";


function About() {
  return (
    <section className="about-section">
      
      <div className="about-container">

        <div className="about-image">
        </div>

        <div className="about-content">
          <h2>About Our Service</h2>

          <p>
            Get a verified sick leave certificate from licensed doctors
            through a quick and secure online video consultation. No
            waiting rooms, no long queues.
          </p>

          <ul>
            <li>✔ Online video consultation</li>
            <li>✔ Certified medical leave document</li>
            <li>✔ Quick approval process</li>
            <li>✔ Available from home</li>
          </ul>

          <button className="about-btn">Learn More</button>

        </div>

      </div>

    </section>
  );
}

export default About;