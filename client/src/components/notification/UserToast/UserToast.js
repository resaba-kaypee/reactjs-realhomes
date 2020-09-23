import React, { useContext, useEffect, useState, useRef } from "react";

import AuthContext from "../../../context/auth/authContext";
import SvgIcon from "../../SvgIcon";

const Toast = () => {
  const authContext = useContext(AuthContext);
  const { error, success } = authContext;

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
    if (success && success === "success") {
      message.current = "Successfully updated.";
      setToast(true);
      startTimer();
    }

    if (error && error) {
      message.current = error;
      setToast(true);
      startTimer();
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [error, success, timer]);

  return (
    <div className="fixed bottom-0 right-0 z-40 mb-4 mr-4">
      {toast && (
        <div className="flex items-center w-full bg-white rounded-md shadow">
          <div
            className={
              (success === "success" ? "bg-green-500" : "bg-red-500") +
              " p-3 text-center rounded"
            }>
            <SvgIcon
              name={success === "success" ? "check" : "info"}
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
