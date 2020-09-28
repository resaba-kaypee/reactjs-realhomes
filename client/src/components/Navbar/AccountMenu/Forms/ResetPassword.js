import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import AuthContext from "../../../../context/auth/authContext";

import Alerts from "../../../Notification/Alert/Alert";
import Spinner from "../../../Spinner";

const ResetPassword = () => {
  const history = useHistory();
  const { token } = useParams();
  const authContext = useContext(AuthContext);
  const {
    clearErrorsAuth,
    error,
    loadUser,
    resetPassword,
    success,
    verifyToken,
  } = authContext;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const [data, setData] = useState({
    password: "",
    passwordConfirm: "",
  });

  const { password, passwordConfirm } = data;

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    resetPassword(token, data);
  };

  useEffect(() => {
    verifyToken(token);
    // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    if (error && error === "Token is invalid or has expired.") {
      clearErrorsAuth();
      history.push("/");
    }
    // eslint-disable-next-line
  }, [error, history]);

  useEffect(() => {
    // if token is verfied
    if (success && success === "Token verified") {
      setIsVerified(true);
    }

    // password and passwordConfirm does not match
    if (error && error) {
      setIsSubmitting(false);
      setData({
        password: "",
        passwordConfirm: "",
      });
    }
    // eslint-disable-next-line
  }, [error, success]);

  useEffect(() => {
    // if reset password is success redirect load the user
    if (success && success === "success") {
      setIsSubmitting(false);
      loadUser();
      clearErrorsAuth();
      history.push("/");
    }
    // eslint-disable-next-line
  }, [history, success]);

  if (!isVerified) return <Spinner />;

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-full max-w-xs sm:max-w-sm">
        <button
          // OVERLAY BUTTON
          tabIndex="-1"
          className="fixed inset-0 right-0 w-full h-full bg-black opacity-25 cursor-default"></button>
        <form
          className="relative px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
          onSubmit={onSubmit}>
          {error ? (
            <div className="flex items-center justify-center h-40">
              <Alerts />
            </div>
          ) : (
            <h3 className="py-4 text-2xl font-semibold text-center">
              Reset Password
            </h3>
          )}
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password">
              New Password
            </label>
            <input
              className="w-full px-4 py-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="******************"
              onChange={onChange}
              value={password}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="passwordConfirm">
              Confirm Password
            </label>
            <input
              className="w-full px-4 py-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="passwordConfirm"
              type="password"
              name="passwordConfirm"
              placeholder="******************"
              onChange={onChange}
              value={passwordConfirm}
              required
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              disabled={isSubmitting}
              type="submit"
              className={
                (isSubmitting ? "opacity-50 cursor-wait" : "opacity-100") +
                " px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              }>
              {isSubmitting ? "Resetting..." : "Reset password"}
            </button>
          </div>
          <p className="mt-10 text-xs text-center text-gray-700">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
