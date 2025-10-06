import React from "react";
import { FaMicrophoneAlt, FaBookOpen, FaBrain, FaChartLine } from "react-icons/fa";

const features = [
  { icon: <FaMicrophoneAlt size={40} />, title: "Speaking Practice", desc: "Daily mentor sessions to build real speaking confidence." },
  { icon: <FaBookOpen size={40} />, title: "Mock Tests", desc: "Regular practice with updated IELTS mock papers." },
  { icon: <FaBrain size={40} />, title: "AI Band Predictor", desc: "Track your progress using our smart AI evaluation." },
  { icon: <FaChartLine size={40} />, title: "Performance Reports", desc: "Weekly analytics and improvement tracking." },
];

const Features = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50" id="features">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Our Features</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {features.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 text-center hover:scale-105 transition">
            <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
