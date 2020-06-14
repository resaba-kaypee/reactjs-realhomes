import React, { useState } from 'react';
import SignUp from '../forms/SignUp';

const SignUpButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="flex-shrink-0 px-3 py-2 text-white transition duration-500 ease-in-out border border-yellow-600 rounded hover:bg-yellow-600 hover:border-yellow-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        Join Us
      </button>

      {isOpen && <SignUp setIsOpen={setIsOpen} />}
    </>
  );
};

export default SignUpButton;
