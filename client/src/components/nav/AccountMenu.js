import React, { useState, useEffect, useContext } from "react";
import FormContext from "../../context/form/formContext";
import SignInButton from "../layout/SignInButton";
import SignUpButton from "../layout/SignUpButton";
import SignUp from "../forms/SignUp";
import SignIn from "../forms/SignIn";

const AccountMenu = () => {
  const formContext = useContext(FormContext);
  const { showSignIn, showSignUp, setShowSignUp, closeForms } = formContext;
  const [isOpen, setIsOpen] = useState(false);

  const handleEscape = (e) => {
    if (e.key === "Esc" || e.key === "Escape") {
      setIsOpen(false);
      closeForms();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="md:mr-12 md:order-last">
      {/* IMAGE BUTTON */}
      <div className="relative block md:hidden">
        <button
          className="relative z-10 block w-12 h-12 overflow-hidden border-2 border-gray-600 rounded-full focus:border-white focus:outline-none"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowSignUp();
          }}>
          <img
            src={require("../../assets/img/default.jpg")}
            alt="your avatar"
            className="object-cover w-full h-full"
          />
        </button>
        {isOpen && showSignUp && !showSignIn ? (
          <SignUp setIsOpen={setIsOpen} />
        ) : null}
        {isOpen && showSignIn && !showSignUp ? (
          <SignIn setIsOpen={setIsOpen} />
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
