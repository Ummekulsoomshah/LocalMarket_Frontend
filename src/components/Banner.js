import React from "react";
import { bannar_down, banners } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import CategoryList from "./CategoryList";

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
      <div className="w-11/12 ht-40 m-auto mt-2">
        <Slider {...settings}>
          {banners.map((data, key) => (
            <div className="relative" key={key}>
              <img src={data.banner} alt="banner" className="w-full" />
              <div className="banner-items">
              
              </div>
            </div>
          ))}
        </Slider>

        <CategoryList/>
      </div>
    </div>
  );
};

export default Banner;
