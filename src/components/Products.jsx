
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./Home";

import recharge from "../assets/images/recharge.jpg";
import aroma from "../assets/images/aromatherapy.jpg";
import facial from "../assets/images/facial.jpg";
import massage from "../assets/images/massage.jpg";
import stones from "../assets/images/hot-stone.jpg";
import steam from "../assets/images/herbal-steam.jpg";
import selfCare from "../assets/images/self-care.jpg";

export const services = [
  {
    id: 1, name: "Restore & Recharge", category: "Mood Ritual",
    mood: "Exhausted", duration: "60 min", price: 1899,
    image: recharge, description: "A quiet, restful spa experience."
  },
  {
    id: 2, name: "Calm Mind Ritual", category: "Mood Ritual",
    mood: "Stressed", duration: "50 min", price: 1799,
    image: aroma, description: "A soothing aromatic relaxation ritual."
  },
  {
    id: 3, name: "Gentle Mood Reset", category: "Mood Ritual",
    mood: "Feeling low", duration: "45 min", price: 1499,
    image: facial, description: "A gentle facial with time to unwind."
  },
  {
    id: 4, name: "Comfort & Release", category: "Mood Ritual",
    mood: "Tense", duration: "60 min", price: 1999,
    image: massage, description: "A comfort-focused relaxation massage."
  },
  {
    id: 5, name: "Warm Stone Escape", category: "Regular Spa",
    mood: "Relaxation", duration: "75 min", price: 2499,
    image: stones, description: "A warm-stone-inspired spa experience."
  },
  {
    id: 6, name: "Herbal Steam Retreat", category: "Regular Spa",
    mood: "Unwind", duration: "45 min", price: 1599,
    image: steam, description: "A steam-inspired herbal spa ritual."
  },
  {
    id: 7, name: "Classic Relaxation Massage", category: "Regular Spa",
    mood: "Relaxation", duration: "60 min", price: 1899,
    image: massage, description: "A gentle, classic massage experience."
  },
  {
    id: 8, name: "Everyday Self-Care", category: "Regular Spa",
    mood: "Self-care", duration: "40 min", price: 1299,
    image: selfCare, description: "A simple, feel-good self-care ritual."
  },
  {
    id: 9, name: "Aroma & Stillness", category: "Regular Spa",
    mood: "Calm", duration: "50 min", price: 1699,
    image: aroma, description: "Aromatic oils and a restful atmosphere."
  },
  {
    id: 10, name: "Fresh Glow Facial", category: "Regular Spa",
    mood: "Refresh", duration: "45 min", price: 1399,
    image: facial, description: "A refreshing facial-care experience."
  },
];

export default function Products({ addToCart }) {
  const [filter, setFilter] = useState("All");

  const visibleServices = services.filter(
    (item) => filter === "All" || item.category === filter
  );

  return (
    <>
      <Navbar />

      <section className="mm-page-banner">
        <div className="container" data-aos="fade-up">
          <p className="mm-eyebrow">THE MELLOWMUSE MENU</p>
          <h1>A little care, your way.</h1>
          <p>Mood-led rituals and classic spa favourites, all in one place.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="mm-filter-row">
            <div>
              <p className="mm-eyebrow">FIND YOUR EXPERIENCE</p>
              <h2 className="mm-heading">The spa menu</h2>
            </div>
            <div className="mm-filters">
              {["All", "Mood Ritual", "Regular Spa"].map((option) => (
                <button
                  key={option}
                  className={filter === option ? "active" : ""}
                  onClick={() => setFilter(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-4">
            {visibleServices.map((item, index) => (
              <div className="col-sm-6 col-lg-3" key={item.id} data-aos="fade-up" data-aos-delay={(index % 4) * 70}>
                <article className="mm-product-card">
                  <div className="mm-product-image">
                    <img src={item.image} alt={item.name} />
                    <span>{item.category}</span>
                  </div>
                  <div className="mm-product-info">
                    <p className="mm-product-meta">{item.mood} · {item.duration}</p>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="mm-product-bottom">
                      <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                      <button onClick={() => addToCart(item)}>+ Add</button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
