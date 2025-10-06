import React from "react";

const testimonials = [
  { name: "Priya Singh", quote: "IELTSPro helped me score Band 8 in just 2 months!", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Rahul Mehta", quote: "The mock tests and AI evaluation are game-changers!", image: "https://randomuser.me/api/portraits/men/54.jpg" },
  { name: "Aisha Khan", quote: "Their teachers are supportive and genuinely care.", image: "https://randomuser.me/api/portraits/women/44.jpg" },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 md:px-16" id="testimonials">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">What Our Students Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-xl text-center hover:shadow-lg transition">
            <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-gray-700 italic mb-2">"{t.quote}"</p>
            <h4 className="font-semibold text-blue-600">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
