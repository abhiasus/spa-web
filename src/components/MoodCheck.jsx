
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./Home";

import exhausted from "../assets/images/exhausted.jpg";
import stressed from "../assets/images/stressed.jpg";
import low from "../assets/images/feeling-low.jpg";
import tense from "../assets/images/tense.jpg";
import recharge from "../assets/images/recharge.jpg";
import aroma from "../assets/images/aromatherapy.jpg";
import facial from "../assets/images/facial.jpg";
import massage from "../assets/images/massage.jpg";

const moodOptions = [
  {
    id: "exhausted",
    name: "Completely exhausted",
    text: "I need to recharge.",
    image: exhausted,
    treatment: "Restore & Recharge",
    reason: "A slower, restful experience for when you need a pause.",
    treatmentImage: recharge,
  },
  {
    id: "stressed",
    name: "Stressed out",
    text: "My mind needs quiet.",
    image: stressed,
    treatment: "Calm Mind Ritual",
    reason: "A soothing aroma-inspired experience in a peaceful setting.",
    treatmentImage: aroma,
  },
  {
    id: "low",
    name: "Feeling a little low",
    text: "I want gentle care.",
    image: low,
    treatment: "Gentle Mood Reset",
    reason: "A gentle facial and a little time dedicated to yourself.",
    treatmentImage: facial,
  },
  {
    id: "tense",
    name: "Muscle tension",
    text: "I want to unwind.",
    image: tense,
    treatment: "Comfort & Release",
    reason: "A relaxation-focused massage tailored to your comfort.",
    treatmentImage: massage,
  },
];

export default function MoodCheck() {
  const [selected, setSelected] = useState("");
  const mood = moodOptions.find((item) => item.id === selected);

  return (
    <>
      <Navbar />

      <section className="mm-page-banner">
        <div className="container" data-aos="fade-up">
          <p className="mm-eyebrow">TAKE A BREATH</p>
          <h1>Let's check in with you.</h1>
          <p>There is no right or wrong answer. Choose what feels closest.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="row g-4">
            {moodOptions.map((item, index) => (
              <div className="col-6 col-lg-3" key={item.id} data-aos="fade-up" data-aos-delay={index * 80}>
                <button
                  type="button"
                  className={`mm-mood-choice ${selected === item.id ? "selected" : ""}`}
                  onClick={() => setSelected(item.id)}
                  aria-pressed={selected === item.id}
                >
                  <img src={item.image} alt="" />
                  <span className="mm-choice-check">{selected === item.id ? "✓" : "+"}</span>
                  <strong>{item.name}</strong>
                  <small>{item.text}</small>
                </button>
              </div>
            ))}
          </div>

          {mood && (
            <div className="mm-result" data-aos="fade-up">
              <img src={mood.treatmentImage} alt={mood.treatment} />
              <div>
                <p className="mm-eyebrow">A PLACE TO START</p>
                <h2 className="mm-heading">{mood.treatment}</h2>
                <p className="mm-muted">{mood.reason}</p>
                <div className="d-flex flex-wrap gap-3">
                  <Link className="mm-button" to="/treatments">Why this treatment? ↗</Link>
                  <Link className="mm-button mm-button-outline" to="/products">Browse all services</Link>
                </div>
              </div>
            </div>
          )}

          {!mood && (
            <p className="mm-select-hint text-center">
              Choose a mood above to see a suggested ritual.
            </p>
          )}

          <p className="mm-disclaimer">
            This mood check is for general wellness inspiration, not medical
            assessment or mental-health diagnosis.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
