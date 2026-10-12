
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./Home";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Treatment question",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const change = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSent(false);
  };

  const submit = (event) => {
    event.preventDefault();
    console.log("MellowMuse enquiry:", form);
    setSent(true);
    setForm({
      name: "",
      email: "",
      subject: "Treatment question",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <section className="mm-page-banner">
        <div className="container" data-aos="fade-up">
          <p className="mm-eyebrow">LET'S HAVE A CHAT</p>
          <h1>We're listening.</h1>
          <p>Questions about a mood ritual or one of our spa experiences? Send us a note.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <p className="mm-eyebrow">GET IN TOUCH</p>
              <h2 className="mm-heading">A question is always welcome.</h2>
              <p className="mm-muted">
                Ask about treatment options, session lengths, product
                sensitivities or choosing a comfortable experience.
              </p>
              <div className="mm-contact-note">
                <span>♡</span>
                <div><h3>Treatment enquiries</h3><p>Tell us which ritual you would like to know more about.</p></div>
              </div>
              <div className="mm-contact-note">
                <span>✳</span>
                <div><h3>Comfort first</h3><p>Mention any preferences or sensitivities before choosing a service.</p></div>
              </div>
              <Link className="mm-text-link" to="/products">Browse the spa menu ↗</Link>
            </div>

            <div className="col-lg-7">
              <form className="mm-contact-form" onSubmit={submit}>
                <p className="mm-eyebrow">SEND A MESSAGE</p>
                <h2>How can we help?</h2>

                {sent && (
                  <div className="alert alert-success">
                    Thanks! Your demo form was submitted. No email was sent.
                  </div>
                )}

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="mmName">Your name</label>
                    <input id="mmName" className="form-control" name="name" value={form.name} onChange={change} required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="mmEmail">Email address</label>
                    <input id="mmEmail" className="form-control" type="email" name="email" value={form.email} onChange={change} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="mmSubject">Topic</label>
                    <select id="mmSubject" className="form-select" name="subject" value={form.subject} onChange={change}>
                      <option>Treatment question</option>
                      <option>Mood ritual recommendation</option>
                      <option>Pricing question</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="mmMessage">Message</label>
                    <textarea id="mmMessage" className="form-control" name="message" rows="5" value={form.message} onChange={change} required />
                  </div>
                  <div className="col-12">
                    <button className="mm-button" type="submit">Send enquiry ↗</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
