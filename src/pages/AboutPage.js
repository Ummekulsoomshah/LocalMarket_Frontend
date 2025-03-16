import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-left">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">
        About Locale Market
      </h1>
      <p className="text-gray-700 text-lg mb-4 text-left">
        Welcome to <strong>Locale Market</strong>, the online marketplace dedicated to empowering home-based businesses!  
        We provide a seamless platform where talented individuals can sell their unique products and reach a wider audience.
      </p>
            <img
             src="/images/aboutimg.jpeg"
             alt="Locale Market"
             className="w-[820px] h-[400px] rounded-lg shadow-lg object-cover text-centre" 
             />
    
      <h2 className="text-2xl  mt-6 mb-3 font-bold text-gray-700">Our Mission</h2>
      <p className="text-gray-700 mb-4"> 
        Our goal is to bridge the gap between local sellers and buyers by offering an easy-to-use, secure, and efficient platform.
        We believe in supporting small businesses and fostering economic growth within communities.
      </p>

      <h2 className="text-2xl mt-6 mb-3 text-gray-700 font-bold">Why Choose Us?</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li><strong>Easy Registration:</strong> Start selling in just a few clicks.</li>
        <li><strong>Secure Payments:</strong> Hassle-free transactions with trusted payment methods.</li>
        <li><strong>Product Reviews & Ratings:</strong> Build credibility and trust with customers.</li>
        <li><strong>Admin Support:</strong> A dedicated team to help sellers and buyers.</li>
      </ul>

      <h2 className="text-2xl  mt-6 mb-3 text-gray-700 font-bold">Join Us Today!</h2>
      <p className="text-gray-700 mb-6 text-left">
        Whether you're a buyer looking for unique products or a home-based seller ready to grow your business,  
        Locale Market is here to support you. Sign up today and become part of our growing community!  
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
