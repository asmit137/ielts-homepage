import React from "react";
import bgImage from "../assets/bg.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="IELTS Students"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Content */}
      <div className="relative text-center px-6 md:px-16 text-white max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Boost Your IELTS Band Score
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Join our expert-led courses, AI band prediction tools, and personalized
          practice sessions to achieve your dream IELTS score.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold transition">
            Join Now
          </button>
          <button className="border border-white hover:bg-white hover:text-blue-600 px-6 py-2 rounded-full font-semibold transition">
            Book Free Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
