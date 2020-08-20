import React, { useState, useContext } from "react";
import FormContext from "../../context/form/formContext";
import SignIn from "../forms/SignIn";
import SignUp from "../forms/SignUp";

const SignUpButton = () => {
  const formContext = useContext(FormContext);
  const { showSignUp, showSignIn, setShowSignUp } = formContext;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="flex-shrink-0 px-3 py-2 text-gray-900 transition duration-500 ease-in-out border border-yellow-600 rounded hover:text-white hover:bg-yellow-600 hover:border-yellow-600"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowSignUp();
        }}>
        Join Us
      </button>

      {isOpen && !showSignIn && showSignUp ? (
        <SignUp setIsOpen={setIsOpen} />
      ) : null}
      {isOpen && showSignIn && !showSignUp ? (
        <SignIn setIsOpen={setIsOpen} />
      ) : null}
    </>
  );
};

export default SignUpButton;
