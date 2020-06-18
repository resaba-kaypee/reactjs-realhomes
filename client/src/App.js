import React, { Fragment } from 'react';
import DummyContent from './components/pages/DummyContent';
import SingleProperty from './components/pages/SingleProperty';
// import Navbar from './components/layout/Navbar';
// import Welcome from './components/sections/Welcome';
// import PropertyCards from './components/sections/PropertyCards';
// import WhyChooseUs from './components/sections/WhyChooseUs';
// import CallToAction from './components/sections/CallToAction';
// import News from './components/sections/News';
// import Footer from './components/sections/Footer';

const App = () => {
  return (
    <div className="relative w-screen font-sans bg-gray-100">
      {/* <Navbar />
      <Welcome />
      <PropertyCards />
      <WhyChooseUs />
      <CallToAction />
      <News />
      <Footer /> */}
      <SingleProperty />
    </div>
  );
};

export default App;
