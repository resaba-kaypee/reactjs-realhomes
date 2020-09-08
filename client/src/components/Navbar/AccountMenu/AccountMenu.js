import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../../../context/auth/authContext";
import PropertyContext from "../../../context/property/propertyContext";

import FormContext from "../../../context/form/formContext";
import { SignIn, SignUp } from "./Forms";

const AccountMenu = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { logoutUser } = authContext;

  const propertyContext = useContext(PropertyContext);
  const { clearPropertyList } = propertyContext;

  const formContext = useContext(FormContext);
  const {
    closeForms,
    showSignIn,
    showSignUp,
    setShowSignUp,
    setShowSignIn,
  } = formContext;

  const [account, setAccount] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const cache = sessionStorage.getItem("user");

  const handleEscape = (e) => {
    if (e.key === "Esc" || e.key === "Escape") {
      setIsOpen(false);
      closeForms();
    }
  };

  useEffect(() => {
    if (cache) {
      setAccount(JSON.parse(cache));
    }
  }, [cache]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex items-center justify-end w-full my-5 md:my-0 md:w-auto">
      {account ? (
        <>
          <figure className="w-12 h-12 mr-4 overflow-hidden border-2 rounded-full">
            <img
              src={require(`../../../assets/img/${account.photo}`)}
              alt="your avatar"
              className="object-cover w-full h-full"
            />
          </figure>
          <button
            className="p-2 text-gray-800 transition duration-500 ease-in-out bg-transparent border border-gray-300 rounded hover:bg-gray-100 hover:text-gray-700"
            type="button"
            onClick={() => {
              logoutUser();
              setIsOpen(false);
              setAccount(null);
              clearPropertyList();
              history.push("/");
            }}>
            Log out
          </button>
        </>
      ) : (
        <>
          <button
            className="p-2 mr-4 text-gray-800 transition duration-500 ease-in-out bg-transparent border border-gray-300 rounded hover:bg-gray-100 hover:text-gray-700"
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
              setShowSignIn();
            }}>
            Sign in
          </button>
          <button
            className="p-2 text-gray-200 transition duration-500 ease-in-out bg-blue-600 border rounded hover:bg-blue-500 hover:text-gray-100"
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
              setShowSignUp();
            }}>
            Sign up
          </button>
        </>
      )}
      {isOpen && showSignUp && !showSignIn ? (
        <SignUp setIsOpen={setIsOpen} />
      ) : null}
      {isOpen && showSignIn && !showSignUp ? (
        <SignIn setIsOpen={setIsOpen} />
      ) : null}
    </div>
  );
};

export default AccountMenu;