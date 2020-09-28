import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_USER,
  UPDATE_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  VERIFY_TOKEN,
  LOGIN,
  LOGOUT,
  ERROR,
  CLEAR_ERRORS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case UPDATE_USER:
    case FORGOT_PASSWORD:
    case RESET_PASSWORD:
    case VERIFY_TOKEN:
    case REGISTER_USER:
      return {
        ...state,
        success: action.payload.status,
      };
    case LOGIN:
      sessionStorage.setItem("user", JSON.stringify(action.payload.data.user));
      return {
        ...state,
        isAuthenticated: action.payload.data && true,
        loading: false,
      };
    case USER_LOADED:
      return {
        ...state,
        user: action.payload.data,
        isAuthenticated: action.payload.data && true,
        loading: false,
      };
    case LOGOUT:
      sessionStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case AUTH_ERROR:
    case ERROR:
      return {
        ...state,
        // isAuthenticated: false,
        // loading: false,
        // user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        success: null,
        error: null,
      };

    default:
      return state;
  }
};
