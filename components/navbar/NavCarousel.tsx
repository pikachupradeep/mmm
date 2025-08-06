'use client'

import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <p className="text-white">Beltone by Eric Rajapakse</p>
        </div>
         <div>
          <p className="text-white">Phone  : 076-1647228</p>
        </div>
         <div>
           <p className="text-white">No.341 Galle Rd, Colombo 00300</p>
        </div>
         <div>
          <p className="text-white">info@ericrajapakse.lk</p>
        </div>
       
      </Slider>
    </div>
  );
}

export default AutoPlay;
