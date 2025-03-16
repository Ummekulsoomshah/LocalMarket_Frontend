import React from "react";
import { banner_down, banners } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <BiChevronRight />,
    prevArrow: <BiChevronLeft />,
  };

  return (
    <div>
      <div className="w-9/12 m-auto mt-5">
        <Slider {...settings}>
          {banners.map((data, key) => (
            <div key={key} className="relative h-[600px] overflow-hidden"> 
              {/* Fixed height for uniform size */}
              <img
                src={data.banner}
                alt="banner"
                className="w-full h-full object-cover"
              />
              <div className="banner-items absolute inset-0 flex flex-col items-center justify-center text-white ">
                <h2 className="text-2xl font-semibold">All Collections</h2>
                <h1 className="text-3xl font-bold">
                  Get Up to 20% Off on featured items.
                </h1>
              </div>
            </div>
          ))}
        </Slider>

        <div className="mwa flex gap-8 mt-8"></div>
      </div>
    </div>
  );
};

export default Banner;
