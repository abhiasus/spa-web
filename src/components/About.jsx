
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./Home";
import hero from "../assets/images/hero.jpg";
import selfCare from "../assets/images/self-care.jpg";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="mm-page-banner">
        <div className="container" data-aos="fade-up">
          <p className="mm-eyebrow">A SOFTER KIND OF SELF-CARE</p>
          <h1>Wellness starts with listening to yourself.</h1>
          <p>We believe your mood can be a gentle starting point for choosing a spa experience.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <img className="mm-about-image" src={hero} alt="Peaceful wellness space" />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <p className="mm-eyebrow">THE MELLOWMUSE IDEA</p>
              <h2 className="mm-heading">Your mood matters.</h2>
              <p className="mm-muted">
                Some days call for rest. Others call for a little quiet,
                a refreshing facial or a chance to relax your muscles.
                MellowMuse brings mood-inspired suggestions and classic spa
                experiences together in one welcoming place.
              </p>
              <p className="mm-muted">
                You choose what feels right. We make it easier to explore
                options, understand each experience and build a self-care
                moment around your preferences.
              </p>
              <Link className="mm-button" to="/mood-check">Find your mood ritual ↗</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mm-values section-pad">
        <div className="container">
          <div className="text-center mb-5">
            <p className="mm-eyebrow">WHAT WE BELIEVE</p>
            <h2 className="mm-heading">Care without pressure.</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <article className="mm-value-card">
                <span>01</span><h3>Listen to your mood</h3>
                <p>Use how you feel as inspiration, not as a label.</p>
              </article>
            </div>
            <div className="col-md-4">
              <article className="mm-value-card">
                <span>02</span><h3>Choose your own pace</h3>
                <p>Explore experiences and select what suits your comfort.</p>
              </article>
            </div>
            <div className="col-md-4">
              <article className="mm-value-card">
                <span>03</span><h3>Make space for yourself</h3>
                <p>Self-care can be a small, thoughtful moment in your day.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mm-about-feature section-pad">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <p className="mm-eyebrow">A MOMENT JUST FOR YOU</p>
              <h2 className="mm-heading">Small rituals. Softer days.</h2>
              <p className="mm-muted">Start with a mood, explore a treatment, or simply browse the menu.</p>
              <Link className="mm-button" to="/products">Explore the spa menu ↗</Link>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <img className="mm-about-image" src={selfCare} alt="Self-care products and calming botanicals" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
