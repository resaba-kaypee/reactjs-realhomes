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
    case REGISTER_USER:
      console.log("Message:", action.payload);
      return {
        ...state,
        success: action.payload.status,
      };
    case LOGIN:
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
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case AUTH_ERROR:
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
