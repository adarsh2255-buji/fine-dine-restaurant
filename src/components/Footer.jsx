import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Restaurant Name */}
        <h2 className="text-2xl font-bold font-heading">Fine Dine Restaurant</h2>
        <p className="text-gray-400 mt-2">Serving delicious meals since 2025</p>

        {/* Quick Links */}
        <div className="mt-4 space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/menu" className="hover:text-gray-400">Menu</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-gray-400" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-4 text-gray-400">
          <p>📍 123 Main Street, Kollam, India</p>
          <p>📞 +123 456 7890</p>
          <p>✉️ finedine@gamil.com</p>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-gray-500">&copy; 2025 Fine Dine. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
