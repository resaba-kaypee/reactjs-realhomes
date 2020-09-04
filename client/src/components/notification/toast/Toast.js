import React, { useContext, useEffect, useState, useRef } from "react";

import PropertyContext from "../../../context/property/propertyContext";
import SvgIcon from "../../SvgIcon";

const Toast = () => {
  const propertyContext = useContext(PropertyContext);
  const { status } = propertyContext;

  const [toast, setToast] = useState(false);
  const message = useRef("");

  let timer;

  const startTimer = () => {
    timer = setTimeout(() => {
      setToast(false);
      message.current = "";
    }, 5000);
  };

  // Toast
  useEffect(() => {
    if (status && status === "success") {
      message.current = "Successfully added from list.";
      setToast(true);
      startTimer();
    }

    if (status && status === "removed") {
      message.current = "Successfully removed from list.";
      setToast(true);
      startTimer();
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [status, timer]);

  return (
    <div className="fixed bottom-0 right-0 z-40 mb-4 mr-4">
      {toast && (
        <div className="flex items-center w-full bg-white rounded-md shadow">
          <div
            className={
              (status === "success" ? "bg-green-500" : "bg-red-500") +
              " p-3 text-center rounded"
            }>
            <SvgIcon
              name={status === "success" ? "check" : "info"}
              className="w-8 h-8 text-white fill-current"
            />
          </div>
          <div className="flex items-center mx-3 rounded-lg rounded-l-none">
            <p className="text-gray-700 text-md">{message.current}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toast;
