import React, { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";

import QuoteImg from "../../assets/img/quote.png";
import imageOne from "../../assets/sample/mona.jpg";
import imageTwo from "../../assets/sample/scream.jpg";
import imageThree from "../../assets/sample/starry-night.jpg";

const SlideTestimonial = () => {
  const [state, setState] = useState({
    value: 0,
    slides: [
      <div className="flex flex-col items-center px-10 text-yellow-600">
        <img src={QuoteImg} alt="qoute" />
        <h5 className="text-2xl text-center">
          “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          iste unde accusantium necessitatibus saepe. ”
        </h5>
        <div className="mt-4 text-center">
          <h5>Frank Hill</h5>
          <p>King of the hill</p>
        </div>
      </div>,
      <div className="flex flex-col items-center px-10 text-yellow-600">
        <img src={QuoteImg} alt="qoute" />
        <h5 className="text-2xl text-center">
          “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          iste unde accusantium necessitatibus saepe. ”
        </h5>
        <div className="mt-4 text-center">
          <h5>Mr. White</h5>
          <p>CEO BlueMethLab</p>
        </div>
      </div>,
      <div className="flex flex-col items-center px-10 text-yellow-600">
        <img src={QuoteImg} alt="qoute" />
        <h5 className="text-2xl text-center">
          “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          iste unde accusantium necessitatibus saepe. ”
        </h5>
        <div className="mt-4 text-center">
          <h5>Tony Stark</h5>
          <p>Iron Man</p>
        </div>
      </div>,
    ],
  });

  const onChange = (value) => {
    setState({ ...state, value });
    console.log(value);
  };

  return (
    <div>
      <Carousel
        arrows
        value={state.value}
        slides={state.slides}
        onChange={onChange}
      />

      <Dots
        onChange={onChange}
        number={state.slides.length}
        value={state.value}
      />
    </div>
  );
};

export default SlideTestimonial;
