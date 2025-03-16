

import React from "react";
import Banner from "../components/Banner";
import { Feature } from "../components/Feature";
import { Review } from "../components/Review";
// import { BestSeller } from "../components/BestSeller";
import { NewDesignCover } from "../components/NewDesignCover";
import { Blog } from "../components/Blog";
import Sidebar from "../components/Sidebar";
import Chatbot from "../components/Chatbot";  // Import Chatbot component

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner Section */}
      <section className="banner-section">
        <Banner />
      </section>

      {/* Main Content Section */}
      <section className="main-content">
        {/* Feature Section */}
        <section className="feature-section">
          <Feature />
        </section>

        {/* Review Section */}
        <section className="review-section">
          <Review />
        </section>

        {/* Best Seller Section
        <section className="best-seller-section">
          <BestSeller />
        </section> */}

        {/* New Design Section */}
        <section className="new-design-cover-section">
          <NewDesignCover />
        </section>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <Blog />
      </section>

      {/* Sidebar Section */}
      <section className="sidebar-section">
        <Sidebar />
      </section>

      {/* Chatbot Section - Fixed on the right */}
      <section
        className="chatbot-section fixed bottom-10 right-5 z-50 bg-gray-800 shadow-lg rounded-lg p-3"
      >
        <Chatbot />
      </section>

    </div>
  );
};

export default Home;
