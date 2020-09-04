import React, { useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import AuthContext from "./context/auth/authContext";
import PropertyContext from "./context/property/propertyContext";

import Navbar from "./components/Navbar/";
import Footer from "./components/Footer";

import {
  AboutPage,
  BuyPage,
  HomePage,
  NotFoundPage,
  RentalPage,
  SellPage,
} from "./components/Pages";

import { ListingsPage, ListingsRentalPage } from "./components/Listings";

import PropertyDetails from "./components/PropertyDetails";

import Toast from "./components/Notification/Toast";
import UserDashBoard from "./components/UserDashBoard";

const App = () => {
  const authContext = useContext(AuthContext);
  const { loadUser, isAuthenticated } = authContext;
  const propertyContext = useContext(PropertyContext);
  const { getUserPropertyList, status, clearErrorsProperty } = propertyContext;
  const user = sessionStorage.getItem("user");

  useEffect(() => {
    // auth user when reloading the page if token is present and the user is present
    if (user) loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // fetch user property list after logging in
    if (isAuthenticated) {
      getUserPropertyList();
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  let timer;

  const startTimer = () => {
    timer = setTimeout(() => {
      clearErrorsProperty();
    }, 5000);
  };

  useEffect(() => {
    // fetch new user property list when added a new one
    if (status || status === "success") {
      getUserPropertyList();
      startTimer();
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [status, timer]);

  return (
    <div className="w-screen h-screen font-sans">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/realstateforsale" component={BuyPage} />
        <Route path="/sell" component={SellPage} />
        <Route path="/rentals" component={RentalPage} />
        <Route path="/myhome" component={UserDashBoard} />
        <Route path="/about" component={AboutPage} />
        <Route path="/properties-search" component={ListingsPage} />
        <Route path="/rentals-search" component={ListingsRentalPage} />
        <Route path="/property/:slug" component={PropertyDetails} />
        <Route component={NotFoundPage} />
      </Switch>
      <Toast />
      <Footer />
    </div>
  );
};

export default App;
