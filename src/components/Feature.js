import React from "react";
import Slider from "react-slick";
import { features } from "../data/Data";
import { Heading } from "../components/Heading";
import { BiCart } from "react-icons/bi";

export const Feature = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Heading
        heading={"Locale Collections"}
        subheading={"Featured Products"}
        description={"Discover Unique Local Market Finds"}
      />
      <div className="w-10/12 m-auto">
        <Slider {...settings}>
          {features.map((val, key) => (
            <div className="features flex gap-8 mt-8" key={key}>
              <div className="relative m-2 w-64 h-64">
                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={val.img}
                    alt={val.short_description}
                    className="w-full h-full object-cover"
                  />
                  {/* "New" Tag */}
                  <div className="absolute top-0 z-10">
                    <p className="bg-green-600 m-2 rounded-full w-12 h-12 grid place-items-center text-white">
                      {val.tag}
                    </p>
                  </div>
                </div>
                {/* Product Details */}
                <div className="text-center mt-2">
                  <p className="text-lg font-semibold">{val.short_description}</p>
                  
                  <p className="text-red-600 font-bold mt-1">${val.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
