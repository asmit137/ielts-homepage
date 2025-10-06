import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
