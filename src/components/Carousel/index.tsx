import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
  children?: React.ReactNode;
};

export default function Carousel({ children }: CarouselProps) {
  var settings: Settings = {
    className: "gallery",
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 1000,
  };

  return (
    <div className="slick_container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
  // return <div>{children}</div>;
}
