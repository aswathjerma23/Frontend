import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MedVideoConsult</div>
       <ul className="nav-links">
        <li className="nav-item">Home</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">About Us</li>
      </ul>
      <Link to="/login">
       <button className="cta-button" >Login / Register</button>
      </Link>
      
    </nav>
  );
}

export default Navbar;