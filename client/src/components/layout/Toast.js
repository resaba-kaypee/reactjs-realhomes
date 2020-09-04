import React from "react";
import Alerts from "./Alerts";

const Toast = () => {
  return (
    <div className="fixed bottom-0 right-0 z-40 mb-4 mr-4">
      <Alerts />
    </div>
  );
};

export default Toast;
