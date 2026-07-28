import React from "react";
import { Hero } from "../components/hero/Hero";
import "./styles/Home.css";

import cuteDog from "../Assests/cute_dog_adoption.jpg";
import cuteCat from "../Assests/cute_cat_adoption.jpg";
import booDog from "../Assests/boo_terrier.jpg";
import bravoDog from "../Assests/bravo_labrador.jpg";

function Home() {
  return (
    <div className="home-container">
      <Hero />
      
      <section className="section-featured section-padding">
        <div className="section-header animate-fade-up">
          <h2>Pets Available for Adoption Nearby</h2>
          <p>Meet our most adorable friends looking for a forever home.</p>
        </div>
        
        <div className="pet-grid">
          <div className="pet-card glass-panel">
            <div className="pet-img-container">
              <img src={cuteDog} alt="Golden Retriever Puppy" />
              <div className="pet-tag">New</div>
            </div>
            <div className="pet-info">
              <h3>Buddy</h3>
              <p>Golden Retriever • 3 Months</p>
              <button className="btn-modern btn-primary w-full mt-4">Meet Buddy</button>
            </div>
          </div>
          
          <div className="pet-card glass-panel">
            <div className="pet-img-container">
              <img src={cuteCat} alt="Scottish Fold Kitten" />
            </div>
            <div className="pet-info">
              <h3>Luna</h3>
              <p>Scottish Fold • 2 Months</p>
              <button className="btn-modern btn-primary w-full mt-4">Meet Luna</button>
            </div>
          </div>

          <div className="pet-card glass-panel">
            <div className="pet-img-container">
              <img src={booDog} alt="Boo" />
            </div>
            <div className="pet-info">
              <h3>Boo</h3>
              <p>Terrier Mix • 1 Year</p>
              <button className="btn-modern btn-primary w-full mt-4">Meet Boo</button>
            </div>
          </div>
          
          <div className="pet-card glass-panel">
            <div className="pet-img-container">
              <img src={bravoDog} alt="Bravo" />
            </div>
            <div className="pet-info">
              <h3>Bravo</h3>
              <p>Labrador Mix • 2 Years</p>
              <button className="btn-modern btn-primary w-full mt-4">Meet Bravo</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-resources section-padding bg-light">
        <div className="section-header animate-fade-up">
          <h2>Planning to Adopt?</h2>
          <p>Everything you need to know before bringing your new friend home.</p>
        </div>

        <div className="resource-grid">
          <div className="resource-card glass-panel">
            <div className="resource-icon">📋</div>
            <h3>Checklist for New Adopters</h3>
            <p>Help make the transition as smooth as possible for you and your pet.</p>
            <button className="btn-modern btn-secondary mt-4">Read Article</button>
          </div>
          <div className="resource-card glass-panel">
            <div className="resource-icon">🏥</div>
            <h3>Health & Care</h3>
            <p>Learn about vaccinations, diet, and general care for dogs and cats.</p>
            <button className="btn-modern btn-secondary mt-4">Read Article</button>
          </div>
          <div className="resource-card glass-panel">
            <div className="resource-icon">❓</div>
            <h3>Adoption FAQs</h3>
            <p>Get answers to common questions about the adoption process.</p>
            <button className="btn-modern btn-secondary mt-4">Read Article</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
