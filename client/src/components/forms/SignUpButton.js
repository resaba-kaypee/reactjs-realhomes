import React, { useState, Fragment } from 'react';
import SignUp from '../forms/SignUp';

const SignUpButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <button
        type="button"
        className="px-4 py-1 mt-1 font-semibold text-white focus:outline-none focus:bg-gray-800 md:mt-0 md-ml-2 hover:bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sign Up
      </button>

      {isOpen && <SignUp setIsOpen={setIsOpen} />}
    </Fragment>
  );
};

export default SignUpButton;
