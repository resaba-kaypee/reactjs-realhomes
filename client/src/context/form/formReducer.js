import {
  SHOW_SIGNUP,
  SHOW_SIGNIN,
  CLOSE_FORMS,
  SHOW_FORGOT_PASSWORD,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_SIGNUP:
      return {
        ...state,
        showForgotPassword: false,
        showSignUp: true,
        showSignIn: false,
      };
    case SHOW_SIGNIN:
      return {
        ...state,
        showForgotPassword: false,
        showSignIn: true,
        showSignUp: false,
      };
    case SHOW_FORGOT_PASSWORD:
      return {
        ...state,
        showForgotPassword: true,
        showSignIn: false,
        showSignUp: false,
      };
    case CLOSE_FORMS:
      return {
        showSignIn: false,
        showSignUp: false,
        showForgotPassword: false,
      };
    default:
      return state;
  }
};
