import React, { useState, useEffect } from "react";
import SignInButton from "../layout/SignInButton";
import SignUpButton from "../layout/SignUpButton";
import SignUp from "../forms/SignUp";
import SignIn from "../forms/SignIn";

const AccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleEscape = (e) => {
    if (e.key === "Esc" || e.key === "Escape") {
      setIsOpen(false);
      setShowSignIn(false);
      setShowSignUp(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="md:mr-12 md:order-last">
      {/* IMAGE BUTTON */}
      <div className="relative block md:hidden">
        <button
          className="relative z-10 block w-12 h-12 overflow-hidden border-2 border-gray-600 rounded-full focus:border-white focus:outline-none"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowSignUp(true);
          }}>
          <img
            src={require("../../assets/img/default.jpg")}
            alt="your avatar"
            className="object-cover w-full h-full"
          />
        </button>
        {isOpen && showSignUp ? (
          <SignUp
            setIsOpen={setIsOpen}
            setShowSignIn={setShowSignIn}
            setShowSignUp={setShowSignUp}
          />
        ) : null}
        {isOpen && showSignIn ? (
          <SignIn
            setIsOpen={setIsOpen}
            setShowSignIn={setShowSignIn}
            setShowSignUp={setShowSignUp}
          />
        ) : null}
      </div>

      {/* INLINE BUTTON */}
      <div className="hidden md:block">
        <div className="flex items-center">
          <SignInButton />
          <SignUpButton />
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
