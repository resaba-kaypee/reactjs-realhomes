import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth/authContext";
import SvgIcon from "../svg/SvgIcon";

const Alerts = () => {
  const authContext = useContext(AuthContext);
  const { error, success, clearErrors } = authContext;

  const [show, setShow] = useState(false);
  const message = "Registration successful!";

  let timer;

  const startTimer = () => {
    timer = setTimeout(() => {
      setShow(false);
      clearErrors();
    }, 5000);
  };

  useEffect(() => {
    if (error || success) {
      setShow(true);
      startTimer();
    }
    return () => clearTimeout(timer);
  }, [success, error, timer]);

  return (
    <>
      {show && (
        <div className="flex items-center w-full bg-white rounded-md shadow">
          <div
            className={
              (success ? "bg-green-500" : "bg-red-500") +
              " px-4 py-2 mr-6 -ml-3 text-center rounded"
            }>
            <SvgIcon
              name={success ? "check" : "info"}
              className="w-8 h-8 text-white fill-current"
            />
          </div>
          <div className="flex items-center rounded-lg rounded-l-none">
            {success ? (
              <h2 className="mr-2 text-lg font-semibold text-green-500 ">
                Success
              </h2>
            ) : (
              <h2 className="mr-2 text-lg text-blue-600 font-semi ">Info</h2>
            )}
            <p className="text-gray-700 text-md">{error || message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Alerts;
