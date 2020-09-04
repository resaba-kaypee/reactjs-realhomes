import React from "react";

import CallToAction from "./CallToAction";
import FeaturedProperty from "./FeaturedProperty";
import News from "./News";
import Welcome from "./Welcome";
import WhyChooseUs from "./WhyChooseUs";

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
