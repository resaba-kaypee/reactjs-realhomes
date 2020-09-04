import React, { useState, useContext } from "react";

import FormContext from "../../../../context/form/formContext";
import SignIn from "../Forms/SignIn";
import SignUp from "../Forms/SignUp";

const SignInButton = () => {
  const formContext = useContext(FormContext);
  const { showSignIn, showSignUp, setShowSignIn } = formContext;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="flex-shrink-0 px-4 py-1 mr-2 font-semibold text-gray-700 leading-13 hover:border-t-2 hover:border-b-2 hover:border-green-500 focus:outline-none hover:text-gray-900"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowSignIn();
        }}>
        Sign In
      </button>

      {isOpen && showSignIn && !showSignUp ? (
        <SignIn setIsOpen={setIsOpen} />
      ) : null}
      {isOpen && !showSignIn && showSignUp ? (
        <SignUp setIsOpen={setIsOpen} />
      ) : null}
    </>
  );
};

export default SignInButton;
