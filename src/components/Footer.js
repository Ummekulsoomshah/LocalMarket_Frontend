import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white w-full">
      <div className="w-9/12 mx-auto py-2"> {/* Reduced padding here to decrease height */}
        {/* Footer Content */}
        <div className="flex flex-wrap justify-between items-center gap-12 md:gap-24">
         
          {/* Subscribe & Social Media Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">
              Subscribe to get important updates
            </h2>
            <div className="flex gap-6 mt-2">
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <img
                  src="/images/insta.jpeg"
                  alt="Instagram"
                  className="w-10 h-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
                />
              </a>
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <img
                  src="/images/facebook.jpeg"
                  alt="Facebook"
                  className="w-10 h-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
                />
              </a>
            </div>
          </div>
        </div>

        {/* All Rights Reserved Section */}
        <div className="text-center mt-0 py-2 border-t border-gray-600">
          <p className="text-sm font-light text-gray-400">
            © {new Date().getFullYear()} YourCompanyName. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
// import React from "react";

// const Footer = () => {
//   return (
//     <div className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-r from-gray-800 to-gray-700 text-white">
//       <div className="w-4/12 mx-auto py-2">
//         {/* Footer Content */}
//         <div className="flex flex-wrap justify-between items-center gap-12 md:gap-24">
//           {/* Subscribe & Social Media Section */}
//           <div className="w-full md:w-1/4 mb-8 md:mb-0">
//             <h2 className="text-2xl font-bold text-white mb-2">
//               Subscribe to get important updates
//             </h2>
//             <div className="flex gap-6 mt-2">
//               {/* Instagram Icon */}
//               <a
//                 href="https://www.instagram.com/yourprofile"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="transition-transform transform hover:scale-110"
//               >
//                 <img
//                   src="/images/insta.jpeg"
//                   alt="Instagram"
//                   className="w-10 h-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
//                 />
//               </a>
//               {/* Facebook Icon */}
//               <a
//                 href="https://www.facebook.com/yourpage"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="transition-transform transform hover:scale-110"
//               >
//                 <img
//                   src="/images/facebook.jpeg"
//                   alt="Facebook"
//                   className="w-10 h-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* All Rights Reserved Section */}
//         <div className="text-center py-2 border-t border-gray-600">
//           <p className="text-sm font-light text-gray-400">
//             © {new Date().getFullYear()} YourCompanyName. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
