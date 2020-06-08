import React from 'react';
import Home from '../../assets/img/home1.jpg';
import Searchbar from './SearchBar';

const Background = () => {
  return (
    <section
      className="relative w-screen h-screen bg-center lg:bg-cover lg:bg-center"
      style={{
        backgroundImage: `url(${Home})`,
      }}
    >
      <Searchbar />
    </section>
  );
};

export default Background;
