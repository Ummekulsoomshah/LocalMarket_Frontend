import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";  // For fade-in effect

const AboutPage = () => {
  // For fade-in effect after the page loads
  const [fadeIn, setFadeIn] = useState(false);
  
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 font-poppins text-left">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        About Locale Market
      </h1>

      {/* Fade-in images section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: fadeIn ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8"
      >
        <div className="w-full">
          <img
            src="/images/aboutimg.jpeg"
            alt="Locale Market 1"
            className="w-full h-[250px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full">
          <img
            src="/images/slider8.jpg"
            alt="Locale Market 2"
            className="w-full h-[250px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full">
          <img
            src="/images/slider9.jpg"
            alt="Locale Market 3"
            className="w-full h-[250px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        Welcome to <strong>Locale Market</strong>, the online marketplace
        dedicated to empowering home-based businesses! We provide a seamless
        platform where talented individuals can sell their unique products and
        reach a wider audience.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Our Mission</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Our goal is to bridge the gap between local sellers and buyers by
        offering an easy-to-use, secure, and efficient platform. We believe in
        supporting small businesses and fostering economic growth within
        communities.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Why Choose Us?</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
        <li>
          <strong>Easy Registration:</strong> Start selling in just a few
          clicks.
        </li>
        <li>
          <strong>Secure Payments:</strong> Hassle-free transactions with
          trusted payment methods.
        </li>
        <li>
          <strong>Product Reviews & Ratings:</strong> Build credibility and
          trust with customers.
        </li>
        <li>
          <strong>Admin Support:</strong> A dedicated team to help sellers and
          buyers.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Join Us Today!</h2>
      <p className="text-gray-700 mb-8 leading-relaxed">
        Whether you're a buyer looking for unique products or a home-based
        seller ready to grow your business, Locale Market is here to support
        you. Sign up today and become part of our growing community!
      </p>

      <div className="text-center">
        <a
          href="/SignupLogin"
          className="bg-gray-800 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-600 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default AboutPage;