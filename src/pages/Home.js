

// import React from "react";
// import Banner from "../components/Banner";
// import { Feature } from "../components/Feature";
// import { Review } from "../components/Review";
// // import { BestSeller } from "../components/BestSeller";
// import { NewDesignCover } from "../components/NewDesignCover";
// import { Blog } from "../components/Blog";
// import Sidebar from "../components/Sidebar";
// import Chatbot from "../components/Chatbot";  // Import Chatbot component

// const Home = () => {
//   return (
//     <div className="home-container">
//       {/* Banner Section */}
//       <section className="banner-section">
//         <Banner />
//       </section>

//       {/* Main Content Section */}
//       <section className="main-content">
//         {/* Feature Section */}
//         <section className="feature-section">
//           <Feature />
//         </section>

//         {/* Review Section */}
//         <section className="review-section">
//           <Review />
//         </section>

//         {/* Best Seller Section
//         <section className="best-seller-section">
//           <BestSeller />
//         </section> */}

//         {/* New Design Section */}
//         <section className="new-design-cover-section">
//           <NewDesignCover />
//         </section>
//       </section>

//       {/* Blog Section */}
//       <section className="blog-section">
//         <Blog />
//       </section>

//       {/* Sidebar Section */}
//       <section className="sidebar-section">
//         <Sidebar />
//       </section>

//       {/* Chatbot Section - Fixed on the right */}
//       <section
//         className="chatbot-section fixed bottom-10 right-5 z-50 bg-gray-800 shadow-lg rounded-lg p-3"
//       >
//         <Chatbot />
//       </section>

//     </div>
//   );
// };

// export default Home;

import React from "react";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import { Feature } from "../components/Feature";
import { Review } from "../components/Review";
// import { BestSeller } from "../components/BestSeller";
import { NewDesignCover } from "../components/NewDesignCover";
import { Blog } from "../components/Blog";
import Sidebar from "../components/Sidebar";
import Chatbot from "../components/Chatbot";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  return (
    <div className="home-container bg-gray-50 min-h-screen relative">
      {/* Banner */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible">
        <Banner />
      </motion.div>

      <main className="space-y-16 px-4 md:px-12 py-8">
        {/* Features */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={1}>
          <Feature />
        </motion.div>

        {/* Reviews */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={2}>
          <Review />
        </motion.div>

        {/* Best Sellers (optional) */}
        {/* <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={3}>
          <BestSeller />
        </motion.div> */}

        {/* New Designs */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={3}>
          <NewDesignCover />
        </motion.div>

        {/* Blog */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={4}>
          <Blog />
        </motion.div>
      </main>

      {/* Sidebar */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={5}>
        <Sidebar />
      </motion.div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Home;
