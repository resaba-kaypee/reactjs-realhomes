import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import {
  USER_LOADED,
  // AUTH_ERROR,
  REGISTER_USER,
  // LOGOUT,
  ERROR,
  CLEAR_ERRORS,
  LOGIN,
  LOGOUT,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    loading: true,
    success: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // register new user
  const registerUser = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/v1/users/signup", data, config);
      dispatch({ type: REGISTER_USER, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  // load user

  const loadUser = async () => {
    try {
      const res = await axios.get("/api/auth");
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {}
  };

  // log in user
  const loginUser = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/v1/users/login", data, config);
      dispatch({ type: LOGIN, payload: res.data });
      loadUser();
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  // deavtivate user account
  const deleteUser = () => {};

  // user logout
  const logoutUser = async () => {
    try {
      const res = await axios.get("/api/v1/users/logout");
      dispatch({ type: LOGOUT });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
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
        loadUser,
        logoutUser,
        deleteUser,
        clearErrors,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
