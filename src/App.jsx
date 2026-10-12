
import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import MoodCheck from "./components/MoodCheck";
import Products from "./components/Products";
import Treatments from "./components/Treatments";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";

import "./assets/style/style.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id);

      if (existing) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });

    alert(`${product.name} added to your bag!`);
  };

  const updateQuantity = (id, amount) => {
    setCart((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((items) => items.filter((item) => item.id !== id));
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mood-check" element={<MoodCheck />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route
          path="/treatments"
          element={<Treatments addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
