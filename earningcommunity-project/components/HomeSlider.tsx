'use client'
import Image from 'next/image'
import React, { ChangeEvent, useEffect, useState } from 'react'
import slider1 from '../public/slider1.png'

export default function HomeSlider() {
    const images = [
        slider1,
        slider1,
        slider1,
        // Add more image URLs as needed
      ];

      const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleLoad = () => {
    setLoaded(true);
  };
  return (
    <div className='aspect-[2/1] lg:aspect-auto  lg:h-[890px] relative'>
      {images.map((imageUrl, index) => (
        <Image
          key={index}
          alt="background Image"
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          className={`absolute top-0 left-0 transition-opacity duration-1000 ${
            currentImageIndex === index ? "opacity-100" : "opacity-0"
          } ${loaded ? "loaded" : ""}`}
          onLoad={handleLoad}
        />
      ))}
      <div className="flex justify-center w-full absolute bottom-4">
          <div className="flex md:gap-[20px] gap-[9px] justify-center">
            {images.map((imageUrl, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`md:h-[13px] h-[8px] md:w-[70px] w-[30px] rounded-[20px] ${
                  currentImageIndex === index ? "bg-[#E3A832]" : "bg-[#D9D9D9]"
                }`}
              ></div>
            ))}
          </div>
        </div>
    </div>
  )
}
