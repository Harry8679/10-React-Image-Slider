import React, { useState } from 'react';
import './Slider.scss';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { sliderData } from './slider-data';



const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className='slide'>
      <FaArrowAltCircleLeft className='arrow prev' />
      <FaArrowAltCircleRight className='arrow next' />

      {sliderData.map((slide, index) => {
        return (
            <div className={index === currentSlide ? 'slide current': 'slide'} key={index}>
                {index === currentSlide && (
                    <div>
                        <img src={slide.image} alt="slide" />
                        <div className="content">
                            <h2>{slide.heading}</h2>
                            <p>{slide.desc}</p>
                            <hr />
                            <button className="--btn --btn-ptimary">Get Started</button>
                        </div>
                    </div>
                )}
            </div>
        )
      })}
    </div>
  )
}

export default Slider;
