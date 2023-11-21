import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMG1 from "../../assets/1.jpg";
import IMG2 from "../../assets/3.jpg";
import IMG3 from "../../assets/4.jpg";
import IMG4 from "../../assets/5.jpg";
import IMG5 from "../../assets/6.jpg";

const Carrusel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="w-full h-[280px]">
        <img src={IMG1} className="w-full h-auto" />
      </div>
      <div className="w-full h-[280px]">
        <img src={IMG2} className="w-full h-auto" />
      </div>
      <div className="w-full h-[280px]">
        <img src={IMG3} className="w-full h-auto" />
      </div>
      <div className="w-full h-[280px]">
        <img src={IMG4} className="w-full h-auto" />
      </div>
      <div className="w-full h-[280px]">
        <img src={IMG5} className="w-full h-auto" />
      </div>
      <div className="w-full h-[280px]">
        <img src={IMG1} className="w-full h-auto" />
      </div>
    </Slider>
  );
};

export default Carrusel;
