import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t-1">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">About HB BLOG</h2>
          <p className="text-sm">
            HB BLOG provides insightful articles on various topics including
            technology, lifestyle, and more. Stay updated with our latest posts
            and tips.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gray-300">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-300">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> 1234 Street Name, City,
              Country
            </li>
            <li>
              <i className="fas fa-phone"></i> +123 456 7890
            </li>
            <li>
              <i className="fas fa-envelope"></i> contact@hbblog.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2024 HB BLOG. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
