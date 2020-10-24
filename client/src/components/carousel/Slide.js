import React, { useState } from "react";

import Carousel, { Dots } from "@brainhubeu/react-carousel";

const Slide = ({ cover, images }) => {
  const imgs = [cover, ...images];

  const slides = imgs.map((img) => (
    <img
      src={require(`../../assets/img/property/${img}`)}
      alt="property cover"
    />
  ));

  const [state, setState] = useState({
    value: 0,
    slides,
    thumbnails: slides,
  });

  const onChange = (value) => setState({ ...state, value });

  return (
    <div>
      <div className="relative overflow-hidden rounded sm:rounded-lg">
        <Carousel
          value={state.value}
          slides={state.slides}
          onChange={onChange}
        />
      </div>
      <div className="relative -mt-20 lg:-mt-24 lg:p-12">
        <Dots
          number={state.thumbnails.length}
          thumbnails={state.thumbnails}
          value={state.value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Slide;
