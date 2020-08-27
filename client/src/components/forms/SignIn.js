import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import FormContext from "../../context/form/formContext";
import Modal from "../layout/Modal";
import Alerts from "../layout/Alerts";

const SignIn = ({ setIsOpen }) => {
  const authContext = useContext(AuthContext);
  const { loginUser, error, success, isAuthenticated, user } = authContext;
  const formContext = useContext(FormContext);
  const { closeForms, setShowSignUp } = formContext;

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log("Error:", error);
  console.log("Successr:", success);

  useEffect(() => {
    if (!success && isAuthenticated && user) {
      setIsSubmitting(false);
      closeForms();
    }
  }, [success, isAuthenticated, user]);

  const { email, password } = value;

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    loginUser(value);
  };

  return (
    <Modal>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="w-full max-w-xs sm:max-w-sm">
          <button
            // OVERLAY BUTTON
            tabIndex="-1"
            className="fixed inset-0 right-0 w-full h-full bg-black opacity-25 cursor-default"
            onClick={() => {
              setIsOpen(false);
              closeForms();
            }}></button>
          <form
            onSubmit={onSubmit}
            className="relative px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <div className="w-full h-20">
              <Alerts />
            </div>
            <button
              type="button"
              tabIndex="-1"
              className="absolute top-0 right-0 -mt-6 -mr-6 text-red-600 rounded-full shadow-md cursor-pointer focus:border-white focus:outline-none"
              onClick={() => {
                setIsOpen(false);
                closeForms();
              }}>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
              </svg>
            </button>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                onChange={onChange}
                value={email}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="******************"
                onChange={onChange}
                value={password}
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
                {isSubmitting ? "Signing in..." : "Sign In"}
              </button>
              <div className="flex flex-col items-center mt-4">
                <a
                  className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                  href="!#">
                  Forgot Password?
                </a>
                <p className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                  No account?{" "}
                  <button
                    onClick={() => setShowSignUp()}
                    type="button"
                    className="font-bold text-blue-700 border-b-2 border-blue-800">
                    Register here
                  </button>
                </p>
              </div>
            </div>
            <p className="mt-10 text-xs text-center text-gray-700">
              &copy;2020 Acme Corp. All rights reserved.
            </p>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default SignIn;
