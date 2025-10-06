import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <section id="home"><Hero /></section>
      <section id="features"><Features /></section>
      <section id="testimonials"><Testimonials /></section>
    </div>
  );
};

export default HomePage;
