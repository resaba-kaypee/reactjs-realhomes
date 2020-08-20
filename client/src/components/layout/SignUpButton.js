import React, { useState } from "react";
import SignUp from "../forms/SignUp";

const SignUpButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [setShowSignUp] = useState(false);
  const [setShowSignIn] = useState(false);
  return (
    <>
      <button
        type="button"
        className="flex-shrink-0 px-3 py-2 text-gray-900 transition duration-500 ease-in-out border border-yellow-600 rounded hover:text-white hover:bg-yellow-600 hover:border-yellow-600"
        onClick={() => setIsOpen(!isOpen)}>
        Join Us
      </button>

      {isOpen && (
        <SignUp
          setIsOpen={setIsOpen}
          setShowSignIn={setShowSignIn}
          setShowSignUp={setShowSignUp}
        />
      )}
    </>
  );
};

export default SignUpButton;
