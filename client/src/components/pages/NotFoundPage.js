import React from "react";

import Search from "../Search";
import HeroSectionContainer from "../Shared/HeroSectionContainer";

const NotFoundPage = () => {
  return (
    <HeroSectionContainer>
      <div className="mb-4">
        <h1 className="text-4xl font-semibold text-yellow-500">
          Page not found.
        </h1>
        <p className="text-2xl font-semibold text-yellow-500">
          Sorry, we can't find the page you're looking for. Maybe you can the
          try search function?
        </p>
      </div>
      <Search />
    </HeroSectionContainer>
  );
};

export default NotFoundPage;
