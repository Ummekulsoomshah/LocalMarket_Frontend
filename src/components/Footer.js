import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-700 to-gray-600  text-white w-full">
      <div className="w-9/12 mx-auto py-4"> {/* Reduced padding here to decrease height */}
        {/* Footer Content */}
        <div className="flex flex-wrap justify-between items-center gap-12 md:gap-24">
         
          {/* Subscribe & Social Media Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">
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

       
      </div>
    </div>
  );
};

export default Footer;
