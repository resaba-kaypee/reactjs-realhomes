import React, { useState, useEffect } from 'react';

const AccountDropdown = () => {
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
      {isOpen && (
        <button
          tabIndex="-1"
          className="fixed inset-0 right-0 w-full h-full bg-black opacity-25 cursor-default"
          onClick={() => setIsOpen(false)}
        ></button>
      )}
      <div
        className={
          (isOpen ? 'block ' : 'hidden ') +
          'absolute left-0 w-56 py-2 mt-2 text-gray-700 bg-white rounded-lg shadow-xl mt-7'
        }
      >
        <a
          href="!#"
          className="block px-4 py-2 hover:bg-gray-400 hover:text-gray-900"
        >
          Sign in
        </a>
        <a
          href="!#"
          className="block px-4 py-2 hover:bg-gray-400 hover:text-gray-900"
        >
          Sign up
        </a>
      </div>
    </div>
  );
};

export default AccountDropdown;
