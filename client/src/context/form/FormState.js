import React, { useReducer } from "react";
import FormContext from "./formContext";
import formReducer from "./formReducer";
import {
  SHOW_FORGOT_PASSWORD,
  SHOW_SIGNUP,
  SHOW_SIGNIN,
  CLOSE_FORMS,
} from "../types";

const FormState = (props) => {
  const initialState = {
    showSignUp: false,
    showSignIn: false,
    showForgotPassword: false,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const setShowSignUp = () => {
    dispatch({ type: SHOW_SIGNUP });
  };
  const setShowSignIn = () => {
    dispatch({ type: SHOW_SIGNIN });
  };
  const setForgotPassword = () => {
    dispatch({ type: SHOW_FORGOT_PASSWORD });
  };
  const closeForms = () => {
    dispatch({ type: CLOSE_FORMS });
  };

  return (
    <FormContext.Provider
      value={{
        showSignIn: state.showSignIn,
        showSignUp: state.showSignUp,
        showForgotPassword: state.showForgotPassword,
        setShowSignIn,
        setShowSignUp,
        setForgotPassword,
        closeForms,
      }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
