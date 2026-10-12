
import React from "react";
import { Link } from "react-router-dom";

import hero from "../assets/images/hero.jpg";
import exhausted from "../assets/images/exhausted.jpg";
import stressed from "../assets/images/stressed.jpg";
import low from "../assets/images/feeling-low.jpg";
import tense from "../assets/images/tense.jpg";
import recharge from "../assets/images/recharge.jpg";

const moods = [
  { name: "Exhausted", text: "You deserve to switch off.", image: exhausted },
  { name: "Stressed", text: "Let the noise settle.", image: stressed },
  { name: "Feeling low", text: "Make space for yourself.", image: low },
  { name: "Feeling tense", text: "Release the day's tension.", image: tense },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mm-nav">
      <div className="container">
        <Link className="navbar-brand mm-brand" to="/">
          <img src="/logo.png" alt="MellowMuse logo" />
          <span>MellowMuse<small>MOOD · BODY · BALANCE</small></span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mmNav"
          aria-controls="mmNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mmNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/mood-check">Mood Check</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Spa Menu</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/treatments">Mood Guide</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">Our Story</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item ms-lg-3">
              <Link className="mm-bag" to="/cart">My Bag ↗</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="mm-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <h3>MellowMuse<span>.</span></h3>
            <p>Your mood matters. Make room for a softer moment.</p>
          </div>
          <div className="col-6 col-lg-3">
            <h5>EXPLORE</h5>
            <Link to="/mood-check">Mood Check</Link>
            <Link to="/products">Spa Menu</Link>
            <Link to="/treatments">Mood Guide</Link>
          </div>
          <div className="col-6 col-lg-4">
            <h5>HELLO</h5>
            <Link to="/about">Our Story</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">My Bag</Link>
          </div>
        </div>
        <div className="mm-footer-bottom">
          <span>© 2026 MellowMuse Studio</span>
          <span>A moment for you, exactly as you are.</span>
        </div>
      </div>
    </footer>
  );
}

export { Navbar };

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="mm-hero">
        <img className="mm-hero-image" src={hero} alt="Calm spa room with candles and soft towels" />
        <div className="mm-hero-overlay" />
        <div className="container mm-hero-copy">
          <p className="mm-kicker" data-aos="fade-up">A LITTLE CHECK-IN WITH YOURSELF</p>
          <h1 data-aos="fade-up" data-aos-delay="100">
            How are you<br />really feeling?
          </h1>
          <p data-aos="fade-up" data-aos-delay="180">
            Your day can leave you feeling a hundred different ways.
            Find a spa ritual that meets you where you are.
          </p>
          <Link className="mm-button mm-button-light" to="/mood-check">
            Find my mood ritual ↗
          </Link>
        </div>
        <span className="mm-hero-note">SLOW DOWN · BREATHE OUT · BEGIN AGAIN</span>
      </section>

      <section className="mm-intro section-pad">
        <div className="container text-center" data-aos="fade-up">
          <p className="mm-eyebrow">NO NEED TO HAVE IT ALL FIGURED OUT</p>
          <h2 className="mm-heading">Start with how you feel.</h2>
          <p className="mm-muted mm-intro-text">
            Tired, overwhelmed, low or simply in need of a reset?
            Choose your mood and discover a gentle place to start.
          </p>
        </div>
      </section>

      <section className="mm-moods section-pad">
        <div className="container">
          <div className="mm-section-heading">
            <div>
              <p className="mm-eyebrow">YOUR MOOD, YOUR MOMENT</p>
              <h2 className="mm-heading">What do you need today?</h2>
            </div>
            <Link className="mm-text-link" to="/mood-check">Explore all moods ↗</Link>
          </div>

          <div className="row g-4">
            {moods.map((mood, index) => (
              <div className="col-6 col-lg-3" key={mood.name} data-aos="fade-up" data-aos-delay={index * 90}>
                <Link className="mm-mood-card" to="/mood-check">
                  <img src={mood.image} alt={mood.name} />
                  <div className="mm-mood-card-copy">
                    <h3>{mood.name}</h3>
                    <p>{mood.text}</p>
                    <span>Find your ritual ↗</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mm-feature section-pad">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <img className="mm-feature-image" src={recharge} alt="A peaceful spa recharge experience" />
            </div>
            <div className="col-lg-5 offset-lg-1" data-aos="fade-left">
              <p className="mm-eyebrow">WHEN YOU'RE RUNNING ON EMPTY</p>
              <h2 className="mm-heading">You don't have to earn your rest.</h2>
              <p className="mm-muted">
                Our Restore & Recharge experience is designed around
                slowing down, getting comfortable and taking a pause
                without pressure to do anything else.
              </p>
              <Link className="mm-button" to="/products">Explore the spa menu ↗</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mm-quote section-pad">
        <div className="container text-center" data-aos="zoom-in">
          <span className="mm-quote-mark">“</span>
          <h2 className="mm-heading">You are allowed to take a moment.</h2>
          <p>Even a small pause can be a lovely place to begin.</p>
          <Link className="mm-button" to="/mood-check">Check in with yourself ↗</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
