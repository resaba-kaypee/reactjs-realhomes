import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_USER,
  LOGIN,
  LOGOUT,
  ERROR,
  CLEAR_ERRORS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_USER:
      console.log("Message:", action.payload);
      return {
        ...state,
        success: action.payload.status,
      };
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGOUT:
    case ERROR:
      console.log("Error:", action.payload);
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
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
