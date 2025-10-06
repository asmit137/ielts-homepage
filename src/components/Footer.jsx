import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-600 text-white text-center py-10 mt-auto">
      <h3 className="text-2xl font-semibold mb-2">IELTSPro Institute</h3>
      <p className="mb-4">Helping students achieve global success since 2015.</p>
      <div className="flex justify-center space-x-6 text-xl mb-4">
        <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
        <a href="#" className="hover:text-gray-200"><FaFacebook /></a>
        <a href="#" className="hover:text-gray-200"><FaLinkedin /></a>
      </div>
      <p className="text-sm">© 2025 IELTSPro. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
