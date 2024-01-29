import React, { useState } from 'react';
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { sliderData } from './slider-data';
import './Slider.scss';



const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className='slider'>
      <FaArrowLeft className='arrow prev' />
      <FaArrowRight className='arrow next' />

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
