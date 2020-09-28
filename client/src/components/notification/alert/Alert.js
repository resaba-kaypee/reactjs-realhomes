import React, { useContext, useEffect, useState, useRef } from "react";

import AuthContext from "../../../context/auth/authContext";
import FormContext from "../../../context/form/formContext";
import SvgIcon from "../../SvgIcon";

const Alerts = () => {
  const authContext = useContext(AuthContext);
  const { error, success, clearErrorsAuth } = authContext;
  const formContext = useContext(FormContext);
  const { showSignUp, showForgotPassword } = formContext;

  const [alert, setAlert] = useState(false);
  const message = useRef("");

  let timer;

  const startTimer = () => {
    timer = setTimeout(() => {
      setAlert(false);
      clearErrorsAuth();
      message.current = "";
    }, 5000);
  };

  // Alerts
  useEffect(() => {
    if (success && success === "success" && showForgotPassword) {
      message.current = "Link sent to email!";
      setAlert(true);
      startTimer();
    }

    if (success && success === "success" && showSignUp) {
      message.current = "Registration successful!";
      setAlert(true);
      startTimer();
    }

    if (error && error) {
      message.current = error;
      setAlert(true);
      startTimer();
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [error, success, showForgotPassword, showSignUp, timer]);

  return (
    <>
      {alert && (
        <div className="flex items-center w-full bg-white rounded-md shadow">
          <div
            className={
              (success ? "bg-green-500" : "bg-red-500") +
              " p-3 text-center rounded"
            }>
            <SvgIcon
              name={success ? "check" : "info"}
              className="w-8 h-8 text-white fill-current"
            />
          </div>
          <div className="flex items-center mx-3 rounded-lg rounded-l-none">
            <p className="text-gray-700 text-md">{message.current}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Alerts;
