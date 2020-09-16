import React, { useContext } from "react";
import { Route } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import Spinner from "../Spinner";
import NotLoggedIn from "../UserDashBoard/NotLoggedIn";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  const account = sessionStorage.getItem("user");

  if (!account) return <NotLoggedIn />;

  if (!isAuthenticated && loading) return <Spinner />;

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PrivateRoute;
