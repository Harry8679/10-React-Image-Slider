import React, { useState, useEffect } from 'react';
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { sliderData } from './slider-data';
import './Slider.scss';



const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
        auto();
    }

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === (slideLength - 1) ? 0 : (currentSlide + 1));
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? (slideLength - 1) : currentSlide - 1);
  }

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  return (
    <div className='slider'>
      <FaArrowLeft className='arrow prev' onClick={prevSlide} />
      <FaArrowRight className='arrow next' onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        return (
          <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
            {index === currentSlide && (
              <>
                <img src={slide.image} alt="slide" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                  <button className="--btn --btn-primary">Get Started</button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  )
}

export default Slider;
