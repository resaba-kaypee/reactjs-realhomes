import React, { useContext, useEffect, useState, useRef } from "react";
import AuthContext from "../../context/auth/authContext";
import PropertyContext from "../../context/property/propertyContext";
import SvgIcon from "../svg/SvgIcon";

const Alerts = () => {
  const authContext = useContext(AuthContext);
  const { error, success, clearErrorsAuth } = authContext;
  const propertyContext = useContext(PropertyContext);
  const { status } = propertyContext;

  const [show, setShow] = useState(false);
  const [toast, setToast] = useState(false);
  const message = useRef("");

  let timer;

  const startTimer = () => {
    timer = setTimeout(() => {
      setShow(false);
      setToast(false);
      clearErrorsAuth();
      message.current = "";
    }, 5000);
  };

  // Alerts
  useEffect(() => {
    if (success && success === "success") {
      message.current = "Registration successful!";
      setShow(true);
      startTimer();
    }

    if (error && error) {
      message.current = error;
      setShow(true);
      startTimer();
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [success, error, timer]);

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
    <>
      {show || toast ? (
        <div className="flex items-center w-full bg-white rounded-md shadow">
          <div
            className={
              (success || status === "success"
                ? "bg-green-500"
                : "bg-red-500") + " p-3 text-center rounded"
            }>
            <SvgIcon
              name={success || status === "success" ? "check" : "info"}
              className="w-8 h-8 text-white fill-current"
            />
          </div>
          <div className="flex items-center mx-3 rounded-lg rounded-l-none">
            <p className="text-gray-700 text-md">{message.current}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Alerts;
