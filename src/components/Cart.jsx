
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./Home";

export default function Cart({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const checkout = () => {
    if (!cart.length) {
      alert("Your bag is empty!");
      return;
    }

    alert(
      `MellowMuse demo checkout\nSubtotal: ₹${total.toLocaleString("en-IN")}\nNo payment has been processed.`
    );
  };

  return (
    <>
      <Navbar />
      <section className="mm-page-banner">
        <div className="container">
          <p className="mm-eyebrow">YOUR LITTLE COLLECTION</p>
          <h1>My bag.</h1>
          <p>Your selected moments of self-care.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          {!cart.length ? (
            <div className="mm-empty">
              <span>♡</span>
              <h2 className="mm-heading">Nothing in your bag just yet.</h2>
              <p className="mm-muted">Your next moment of calm is waiting.</p>
              <Link className="mm-button" to="/products">Explore the spa menu ↗</Link>
            </div>
          ) : (
            <div className="row g-5">
              <div className="col-lg-8">
                {cart.map((item) => (
                  <article className="mm-cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="mm-cart-info">
                      <h3>{item.name}</h3>
                      <p>{item.duration}</p>
                      <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                      <div className="mm-quantity">
                        <button onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity">−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity">+</button>
                      </div>
                      <button className="mm-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                    <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
                  </article>
                ))}
              </div>

              <div className="col-lg-4">
                <div className="mm-summary">
                  <p className="mm-eyebrow">THE TOTAL</p>
                  <h2>Order summary</h2>
                  <div><span>Subtotal</span><strong>₹{total.toLocaleString("en-IN")}</strong></div>
                  <div><span>Booking fees</span><span>Not included</span></div>
                  <hr />
                  <div className="mm-total"><span>Total</span><strong>₹{total.toLocaleString("en-IN")}</strong></div>
                  <button className="mm-button w-100 mt-3" onClick={checkout}>Continue ↗</button>
                  <p className="mm-disclaimer">Demo checkout only. No booking or payment is created.</p>
                  <Link className="mm-text-link" to="/products">Continue exploring</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
