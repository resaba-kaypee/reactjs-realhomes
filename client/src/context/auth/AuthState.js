import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

import {
  USER_LOADED,
  REGISTER_USER,
  UPDATE_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  VERIFY_TOKEN,
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

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const patch = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    method: "patch",
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // register new user
  const registerUser = async (data) => {
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
    try {
      const res = await axios.post("/api/v1/users/login", data, config);
      dispatch({ type: LOGIN, payload: res.data });
      await loadUser();
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  // update user info
  const updateUser = async (data) => {
    try {
      const res = await axios.patch("/api/v1/users/updateMe", data, patch);
      dispatch({ type: UPDATE_USER, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  // update user info
  const updatePassword = async (data) => {
    try {
      const res = await axios.patch(
        "/api/v1/users/updateMyPassword",
        data,
        config
      );
      dispatch({ type: UPDATE_USER, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  // forgot password
  const forgotPassword = async (data) => {
    try {
      const res = await axios.post(
        "/api/v1/users/forgotPassword",
        data,
        config
      );
      dispatch({ type: FORGOT_PASSWORD, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  // reset password
  const resetPassword = async (token, data) => {
    try {
      const res = await axios.patch(
        `/api/v1/users/resetPassword/${token}`,
        data,
        config
      );
      dispatch({ type: RESET_PASSWORD, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  // verfify token
  const verifyToken = async (token) => {
    try {
      const res = await axios.get(`/api/v1/users/verify-token/${token}`);
      dispatch({ type: VERIFY_TOKEN, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  // deavtivate user account
  const deleteUser = () => {};

  // user logout
  const logoutUser = async () => {
    try {
      await axios.get("/api/v1/users/logout");
      dispatch({ type: LOGOUT });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  const clearErrorsAuth = () => {
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
        updateUser,
        forgotPassword,
        updatePassword,
        resetPassword,
        verifyToken,
        loginUser,
        loadUser,
        logoutUser,
        deleteUser,
        clearErrorsAuth,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
