import React from 'react';
import Welcome from '../sections/Welcome';
import FeaturedProperty from '../sections/FeaturedProperty';
import WhyChooseUs from '../sections/WhyChooseUs';
import CallToAction from '../sections/CallToAction';
import News from '../sections/News';

const HomePage = () => {
  return (
    <>
      <Welcome />
      <FeaturedProperty />
      <WhyChooseUs />
      <CallToAction />
      <News />
    </>
  );
};

export default HomePage;
