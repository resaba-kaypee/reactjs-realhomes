import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import PropertyContext from "../../context/property/propertyContext";
import FormContext from "../../context/form/formContext";
import SignInButton from "../layout/SignInButton";
import SignUpButton from "../layout/SignUpButton";
import SignUp from "../forms/SignUp";
import SignIn from "../forms/SignIn";

const UserIcon = ({
  user,
  logoutUser,
  clearPropertyList,
  setAccount,
  history,
}) => (
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
        setAccount(null);
        clearPropertyList();
        history.push("/");
      }}
      className="flex-shrink-0 px-3 py-2 text-gray-900 transition duration-500 ease-in-out border border-yellow-600 rounded hover:text-white hover:bg-yellow-600 hover:border-yellow-600">
      Log out
    </button>
  </div>
);

const AccountMenu = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { logoutUser } = authContext;

  const propertyContext = useContext(PropertyContext);
  const { clearPropertyList } = propertyContext;

  const formContext = useContext(FormContext);
  const { showSignIn, showSignUp, setShowSignUp, closeForms } = formContext;

  const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = useState(null);

  const cache = sessionStorage.getItem("user");

  useEffect(() => {
    if (cache) {
      setAccount(JSON.parse(cache));
    }
  }, [cache]);

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
          {account !== null ? (
            <img
              src={require(`../../assets/img/${account.photo}`)}
              alt="your avatar"
              className="object-cover w-full h-full"
            />
          ) : (
            <img
              src={require(`../../assets/img/default.jpg`)}
              alt="your avatar"
              className="object-cover w-full h-full"
            />
          )}
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
        {account !== null ? (
          <UserIcon
            user={account}
            logoutUser={logoutUser}
            clearPropertyList={clearPropertyList}
            setAccount={setAccount}
            history={history}
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
