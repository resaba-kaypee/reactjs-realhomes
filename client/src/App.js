import React, { Fragment } from 'react';
import DummyContent from './components/pages/DummyContent';
import Navbar from './components/layout/Navbar';
import Background from './components/layout/Background';
import PropertyCards from './components/card/PropertyCards';
import WhyChooseUs from './components/sections/WhyChooseUs';
import CallToAction from './components/sections/CallToAction';

const App = () => {
  return (
    <div className="relative w-screen h-screen font-sans bg-gray-100">
      <Navbar />
      <Background />
      <PropertyCards />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
};

export default App;
