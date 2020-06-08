import React from 'react';
import Home from '../../assets/img/home1.jpg';
const Background = () => {
  return (
    <section
      className="h-full bg-center lg:bg-cover lg:bg-center"
      style={{
        backgroundImage: `url(${Home})`,
      }}
    ></section>
  );
};

export default Background;
