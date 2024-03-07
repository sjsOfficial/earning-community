"use client";

import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PackageCard from "./PackageCard";

interface SampleArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SampleNextArrow: React.FC<SampleArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: -4, zIndex: 10 }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow: React.FC<SampleArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ ...style, display: "block", left: -4, zIndex: 10 }}
      onClick={onClick}
    />
  );
};

const PackageSlider: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const play = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const pause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const settings: Settings = {
    pauseOnFocus: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <div className="slider-container">
        <Slider className="" {...settings} ref={sliderRef}>
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
        </Slider>
      </div>
    </div>
  );
};

export default PackageSlider;
