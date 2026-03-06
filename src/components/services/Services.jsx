import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-card">Web Design</div>
        <div className="service-card">Development</div>
        <div className="service-card">Marketing</div>
      </div>
    </section>
  );
}

export default Services;