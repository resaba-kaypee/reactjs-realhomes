import React, { useState } from "react";
import SignIn from "../forms/SignIn";

const SignInButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [setShowSignUp] = useState(false);
  const [setShowSignIn] = useState(false);

  return (
    <>
      <button
        type="button"
        className="flex-shrink-0 px-4 py-1 mr-2 font-semibold text-gray-700 leading-13 hover:border-t-2 hover:border-b-2 hover:border-green-500 focus:outline-none hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}>
        Sign In
      </button>

      {isOpen && (
        <SignIn
          setIsOpen={setIsOpen}
          setShowSignIn={setShowSignIn}
          setShowSignUp={setShowSignUp}
        />
      )}
    </>
  );
};

export default SignInButton;
