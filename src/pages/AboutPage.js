// // import React from "react";

// // const AboutPage = () => {
// //   return (
// //     <div className="font-poppins max-w-4xl mx-auto px-6 py-10 text-gray-700">
// //       <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
// //         About Locale Market
// //       </h1>

// //       <p className="text-lg mb-6 leading-relaxed">
// //         Welcome to <strong>Locale Market</strong> — the online marketplace dedicated to empowering home-based businesses!  
// //         We provide a seamless platform where talented individuals can sell their unique products and reach a wider audience.
// //       </p>

// //       <div className="flex justify-center mb-8">
// //         <img
// //           src="/images/aboutimg.jpeg"
// //           alt="Locale Market"
// //           className="w-full max-w-3xl h-[400px] object-cover rounded-lg shadow-md"
// //         />
// //       </div>

// //       <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
// //         Our Mission
// //       </h2>
// //       <p className="mb-6 leading-relaxed">
// //         Our goal is to bridge the gap between local sellers and buyers by offering an easy-to-use, secure, and efficient platform.
// //         We believe in supporting small businesses and fostering economic growth within communities.
// //       </p>

// //       <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
// //         Why Choose Us?
// //       </h2>
// //       <ul className="list-disc pl-6 space-y-2 mb-6">
// //         <li><strong>Easy Registration:</strong> Start selling in just a few clicks.</li>
// //         <li><strong>Secure Payments:</strong> Hassle-free transactions with trusted payment methods.</li>
// //         <li><strong>Product Reviews & Ratings:</strong> Build credibility and trust with customers.</li>
// //         <li><strong>Admin Support:</strong> A dedicated team to help sellers and buyers.</li>
// //       </ul>

// //       <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-800">
// //         Join Us Today!
// //       </h2>
// //       <p className="mb-10 leading-relaxed">
// //         Whether you're a buyer looking for unique products or a home-based seller ready to grow your business,  
// //         <strong> Locale Market</strong> is here to support you. Sign up today and become part of our growing community!
// //       </p>

// //       <div className="text-center">
// //         <a
// //           href="/SignupLogin"
// //           className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300"
// //         >
// //           Get Started
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutPage;
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const AboutPage = () => {
//   return (
//     <div className="max-w-5xl mx-auto p-6 font-poppins text-left">
//       <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
//         About Locale Market
//       </h1>

//       {/* Image Slider */}
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         className="w-full max-w-4xl h-[400px] rounded-lg shadow-lg mb-8"
//       >
//         <SwiperSlide>
//           <img
//             src="/images/aboutimg.jpeg"
//             alt="Locale Market 1"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="/images/slider4.jpg"
//             alt="Locale Market 2"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="/images/slider8.jpg"
//             alt="Locale Market 3"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </SwiperSlide>
//       </Swiper>

//       <p className="text-gray-700 text-lg mb-6 leading-relaxed">
//         Welcome to <strong>Locale Market</strong>, the online marketplace
//         dedicated to empowering home-based businesses! We provide a seamless
//         platform where talented individuals can sell their unique products and
//         reach a wider audience.
//       </p>

//       <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Our Mission</h2>
//       <p className="text-gray-700 mb-6 leading-relaxed">
//         Our goal is to bridge the gap between local sellers and buyers by
//         offering an easy-to-use, secure, and efficient platform. We believe in
//         supporting small businesses and fostering economic growth within
//         communities.
//       </p>

//       <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Why Choose Us?</h2>
//       <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
//         <li>
//           <strong>Easy Registration:</strong> Start selling in just a few
//           clicks.
//         </li>
//         <li>
//           <strong>Secure Payments:</strong> Hassle-free transactions with
//           trusted payment methods.
//         </li>
//         <li>
//           <strong>Product Reviews & Ratings:</strong> Build credibility and
//           trust with customers.
//         </li>
//         <li>
//           <strong>Admin Support:</strong> A dedicated team to help sellers and
//           buyers.
//         </li>
//       </ul>

//       <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Join Us Today!</h2>
//       <p className="text-gray-700 mb-8 leading-relaxed">
//         Whether you're a buyer looking for unique products or a home-based
//         seller ready to grow your business, Locale Market is here to support
//         you. Sign up today and become part of our growing community!
//       </p>

//       <div className="text-center">
//         <a
//           href="/SignupLogin"
//           className="bg-gray-800 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-600 transition"
//         >
//           Get Started
//         </a>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;


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
