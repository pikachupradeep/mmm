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
    <div className="slider-container mt-0 mb-16">
      <Slider {...settings}>
        <div>
          <Image className="h-[25rem]   md:h-[30rem] w-auto rounded-lg" src="/carousel/img1.png" alt="img1" width={1000} height={1000} />
        </div>
         <div>
          <Image className="h-[25rem]   md:h-[30rem] w-auto rounded-lg" src="/carousel/img2.png" alt="img2" width={1000} height={1000} />
        </div>
         <div>
          <Image className="h-[25rem]   md:h-[30rem] w-auto rounded-lg" src="/carousel/img3.png" alt="img3" width={1000} height={1000} />
        </div>
         <div>
          <Image className="h-[25rem]   md:h-[30rem] w-auto rounded-lg" src="/carousel/img4.png" alt="img4" width={1000} height={1000} />
        </div>
        <div>
          <Image className="h-[25rem]   md:h-[30rem] w-auto rounded-lg" src="/carousel/img5.png" alt="img1" width={1000} height={1000} />
        </div>
         <div>
          <Image className="h-[25rem]   md:h-[30rem] w-auto rounded-lg" src="/carousel/img6.png" alt="img2" width={1000} height={1000} />
        </div>
         <div>
          <Image className="h-[25rem]   md:h-[30rem] w-auto rounded-lg" src="/carousel/img7.png" alt="img3" width={1000} height={1000} />
        </div>
         <div>
          <Image className="h-[25rem]   md:h-[30rem] w-auto rounded-lg" src="/carousel/img8.png" alt="img4" width={1000} height={1000} />
        </div>
         <div>
          <Image className="h-[25rem]   md:h-[30rem] w-auto rounded-lg" src="/carousel/img9.png" alt="img4" width={1000} height={1000} />
        </div>
       
      </Slider>
    </div>
  );
}

export default AutoPlay;
