import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Car1 from "../assets/images/Buggati.webp"
import Car2 from "../assets/images/ferreri.jpeg"
import Car3 from "../assets/images/SFmoter.PNG"

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
    <div className="mt-[180px] py-10 bg-gray-400">
    <Slider {...settings}>
      <div className="h-[200px] md:h-[500px] px-[50px]">
        <img className="w-full h-full" src={Car1} alt="" />
      </div>
      <div className="h-[200px] md:h-[500px] px-[50px]">
        <img className="w-full h-full" src={Car2} alt="" />
      </div>
      <div className="h-[200px] md:h-[500px] px-[50px]">
        <img className="w-full h-full" src={Car3} alt="" />
      </div>
      <div className="h-[200px] md:h-[500px] px-[50px]">
        <img className="w-full h-full" src={Car2} alt="" />
      </div>
      
      
    </Slider>
    </div>
  );
}