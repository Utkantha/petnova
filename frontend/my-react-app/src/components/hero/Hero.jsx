import React from "react";
import "./Hero.css";
import hero_bg from "../../Assests/hero_pets_bg.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero-modern" style={{ backgroundImage: `url(${hero_bg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-up">
        <h1>Find Your Perfect Companion</h1>
        <p>Every pet deserves a loving home. Start your adoption journey today and meet your new best friend.</p>
        <div className="hero-actions">
          <Link to="/pet-adoption" className="btn-modern btn-primary">Adopt a Pet</Link>
          <Link to="/about" className="btn-modern btn-secondary">Learn More</Link>
        </div>
      </div>
    </div>
  );
};
