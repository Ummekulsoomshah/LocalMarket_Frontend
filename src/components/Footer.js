import React from "react";
import { footer } from "../data/Data";
import logo from "../logo/logo-w.png";

const Footer = () => {
  return (
    <div className="bg-gray-700 left-0 w-full">
      <div className="w-10/12 m-auto mb-0">
        <div className="flex flex-wrap justify-between pt-14 pb-14">
          {/* Logo Section */}
          <div className="logo mr-10">
          <img src="./images/logo3.jpg" alt="logo" className="w-40 h-30 object-contain" />
          </div>

          {/* Footer Content */}
          {footer.map((val, index) => (
            <div className="text-gray-500 w-1/4" key={index}>
              <h1 className="text-2xl mb-5 text-white">{val.header}</h1>
              {val.content1 && <p>{val.content1}</p>}
              {val.content2 && <p>{val.content2}</p>}

              {/* Social Media Icons Section */}
              {val.images && (
                <div className="flex gap-4 mt-4">
                  {val.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.alt}
                      className="w-8 h-8"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
