import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import PropertyContext from "../../context/property/propertyContext";
import FormContext from "../../context/form/formContext";
import SignInButton from "../layout/SignInButton";
import SignUpButton from "../layout/SignUpButton";
import SignUp from "../forms/SignUp";
import SignIn from "../forms/SignIn";

const UserIcon = ({ user, logoutUser, clearPropertyList }) => (
  <div className="flex items-center">
    <figure className="w-12 h-12 overflow-hidden border-2 rounded-full md:mr-5">
      <img
        src={require(`../../assets/img/${user.photo}`)}
        alt="your avatar"
        className="object-cover w-full h-full"
      />
    </figure>
    <button
      type="button"
      onClick={() => {
        logoutUser();
        clearPropertyList();
      }}
      className="flex-shrink-0 px-3 py-2 text-gray-900 transition duration-500 ease-in-out border border-yellow-600 rounded hover:text-white hover:bg-yellow-600 hover:border-yellow-600">
      Log out
    </button>
  </div>
);

const AccountMenu = () => {
  const authContext = useContext(AuthContext);
  const { logoutUser, isAuthenticated, user } = authContext;

  const propertyContext = useContext(PropertyContext);
  const { clearPropertyList } = propertyContext;

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
    <div className="md:order-last">
      {/* IMAGE BUTTON */}
      <div className="relative block md:hidden">
        <button
          className="relative z-10 block w-12 h-12 overflow-hidden border-2 border-gray-600 rounded-full focus:border-white focus:outline-none"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowSignUp();
          }}>
          <img
            src={require(`../../assets/img/${"default.jpg" || user.photo}`)}
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
        {user !== null && isAuthenticated ? (
          <UserIcon
            user={user}
            logoutUser={logoutUser}
            clearPropertyList={clearPropertyList}
          />
        ) : (
          <div className="flex items-center">
            <SignInButton />
            <SignUpButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountMenu;
