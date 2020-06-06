import React, { useState, useEffect } from 'react';
import SignInButton from '../forms/SignInButton';
import SignUpButton from '../forms/SignUpButton';
import SignUp from '../forms/SignUp';

const AccountButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEscape = (e) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className="md:order-last">
      <div className="relative block md:hidden">
        <button
          className="relative z-10 block w-12 h-12 overflow-hidden border-2 border-white border-gray-600 rounded-full focus:border-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={require('../../assets/img/default.jpg')}
            alt="your avatar"
            className="object-cover w-full h-full"
          />
        </button>
        {isOpen && <SignUp setIsOpen={setIsOpen} />}
      </div>
      <div className="flex hidden text-gray-700 rounded-lg md:block">
        <SignInButton />
        <span className="border-2 border-gray-300"></span>
        <SignUpButton />
      </div>
    </div>
  );
};

export default AccountButton;
