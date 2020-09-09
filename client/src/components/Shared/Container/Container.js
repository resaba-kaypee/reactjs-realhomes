import React from "react";

const Container = (props) => {
  return (
    <div className="flex justify-center w-full">
      <section className="w-full max-w-6xl">{props.children}</section>
    </div>
  );
};

export default Container;
