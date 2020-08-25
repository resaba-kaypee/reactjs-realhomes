import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import {
  // USER_LOADED,
  // AUTH_ERROR,
  REGISTER_USER,
  // LOGIN,
  // LOGOUT,
  ERROR,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: null,
    user: null,
    loading: true,
    success: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registerUser = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/v1/users/signup", data, config);
      console.log(res);
      dispatch({ type: REGISTER_USER, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  const loadUser = () => {};
  const loginUser = () => {};
  const deleteUser = () => {};
  const logoutUser = () => {};

  const clearErrors = () => {
    dispatch({type: CLEAR_ERRORS})
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        success: state.success,
        error: state.error,
        registerUser,
        loginUser,
        logoutUser,
        deleteUser,
        clearErrors,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
