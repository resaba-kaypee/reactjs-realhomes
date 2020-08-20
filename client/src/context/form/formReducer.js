import { SHOW_SIGNUP, SHOW_SIGNIN, CLOSE_FORMS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_SIGNUP:
      return {
        ...state,
        showSignUp: true,
        showSignIn: false,
      };
    case SHOW_SIGNIN:
      return {
        ...state,
        showSignIn: true,
        showSignUp: false,
      };
    case CLOSE_FORMS:
      return {
        showSignIn: false,
        showSignUp: false,
      };
    default:
      return state;
  }
};
