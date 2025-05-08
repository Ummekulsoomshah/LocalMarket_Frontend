import React from "react";
import Slider from "react-slick";
import { Heading } from "../components/Heading";
import { blogs } from "../data/Data";

export const Blog = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Heading
        heading="Locale Market Collections"
        subheading="Latest From Blog"
        description="Local Treasures Unveiled Here"
      />

      <div className="w-10/12 m-auto">
        <Slider {...settings}>
          {blogs.map((val, key) => (
            <div className="p-2" key={key}>
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="relative w-full h-64">
                  <img
                    src={val.img}
                    alt="blog"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0">
                    <p className="bg-red-600 w-12 text-center text-white p-2 text-xs uppercase">
                      {val.tag}
                    </p>
                  </div>
                </div>
                <div className="text-center p-4">
                  <p className="text-gray-600 text-sm mb-1">{val.short_description}</p>
                  <h3 className="font-semibold mb-1">{val.title}</h3>
                  <p className="text-red-600 text-sm">{val.read_more}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
