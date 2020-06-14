import React, { useState } from 'react';
import SignIn from '../forms/SignIn';

const SignInButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="flex-shrink-0 px-4 py-1 mr-2 font-semibold text-white rounded focus:outline-none focus:bg-gray-800 hover:bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sign In
      </button>

      {isOpen && <SignIn setIsOpen={setIsOpen} />}
    </>
  );
};

export default SignInButton;
