
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./Home";
import { services } from "./Products";

const guides = [
  {
    mood: "When you're exhausted",
    name: "Restore & Recharge",
    explanation: "Choose a restful session with a slower pace and fewer distractions.",
    image: "../assets/images/recharge.jpg",
    tips: ["Allow time to settle in", "Choose a comfortable session length", "Take a quiet moment afterwards"],
    id: 1
  },
  {
    mood: "When you're stressed",
    name: "Calm Mind Ritual",
    explanation: "An aroma-inspired setting and gentle relaxation may help create a calmer spa experience.",
    image: "../assets/images/aromatherapy.jpg",
    tips: ["Share scent sensitivities beforehand", "Choose a quiet environment", "Keep your expectations gentle"],
    id: 2
  },
  {
    mood: "When you're feeling low",
    name: "Gentle Mood Reset",
    explanation: "A simple facial and a little personal time can be a pleasant self-care ritual.",
    image: "../assets/images/facial.jpg",
    tips: ["Mention sensitive skin", "Ask about products used", "Choose what feels comfortable"],
    id: 3
  },
  {
    mood: "When your body feels tense",
    name: "Comfort & Release",
    explanation: "A comfort-focused massage lets you discuss pressure and preferences with the practitioner.",
    image: "../assets/images/massage.jpg",
    tips: ["Discuss pressure preferences", "Mention any areas to avoid", "Stop if anything feels uncomfortable"],
    id: 4
  }
];

export default function Treatments({ addToCart }) {
  return (
    <>
      <Navbar />

      <section className="mm-page-banner">
        <div className="container" data-aos="fade-up">
          <p className="mm-eyebrow">THE MOOD GUIDE</p>
          <h1>Care that meets you where you are.</h1>
          <p>Explore our suggested rituals and find the one that feels right for you.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          {guides.map((guide, index) => {
            const service = services.find((item) => item.id === guide.id);

            return (
              <article className={`mm-guide-row ${index % 2 ? "reverse" : ""}`} key={guide.id} data-aos="fade-up">
                <div className="mm-guide-image">
                  <img src={service.image} alt={guide.name} />
                </div>
                <div className="mm-guide-copy">
                  <p className="mm-eyebrow">{guide.mood}</p>
                  <h2 className="mm-heading">{guide.name}</h2>
                  <p className="mm-muted">{guide.explanation}</p>
                  <h4>Make it your own</h4>
                  <ul>{guide.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
                  <p className="mm-guide-price">
                    ₹{service.price.toLocaleString("en-IN")} <span>/ {service.duration}</span>
                  </p>
                  <button className="mm-button" onClick={() => addToCart(service)}>
                    Add this ritual ↗
                  </button>
                </div>
              </article>
            );
          })}

          <div className="mm-guide-footer">
            <h2 className="mm-heading">Not sure what suits you?</h2>
            <p className="mm-muted">Start with a mood check, or browse the complete spa menu.</p>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <Link className="mm-button" to="/mood-check">Take the mood check ↗</Link>
              <Link className="mm-button mm-button-outline" to="/products">View all services</Link>
            </div>
          </div>

          <p className="mm-disclaimer">
            These descriptions are for general wellness inspiration. They do not
            diagnose or treat stress, low mood, pain or other health conditions.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
