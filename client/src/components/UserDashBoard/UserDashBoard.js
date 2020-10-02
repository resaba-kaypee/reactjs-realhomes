import React, { useContext, useEffect } from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";
import PropertyContext from "../../context/property/propertyContext";

import Container from "../Shared/Container";
import TrackHomeBar from "./TrackHomeBar";
import {
  AccountSettings,
  CompareProperties,
  SavedProperties,
} from "./UserTabs";

const UserDashBoard = ({ match }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  const propertyContext = useContext(PropertyContext);
  const { getUserPropertyList } = propertyContext;

  useEffect(() => {
    if (isAuthenticated) {
      getUserPropertyList();
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  console.log(match);

  return (
    <>
      <Container>
        <div className="w-full mt-24 mb-16 overflow-hidden md:mt-16">
          <main className="flex flex-col flex-1 overflow-y-auto transition duration-500 ease-in-out">
            <div className="mx-10 my-2">
              <nav className="flex flex-row justify-between my-4 transition duration-500 ease-in-out border-b md:justify-start">
                <NavLink
                  to={`${match.url}/saved-properties`}
                  activeClassName="border-b text-gray-900 border-blue-700"
                  className="block py-2 mr-6 font-medium leading-tight text-center text-blue-600 capitalize transition duration-500 ease-in-out focus:outline-none focus:text-gray-900 hover:text-gray-900 sm:leading-13">
                  Saved Properties
                </NavLink>
                <NavLink
                  to={`${match.url}/compare-properties`}
                  activeClassName="border-b text-gray-900 border-blue-700"
                  className="block py-2 mr-6 font-medium leading-tight text-center text-blue-600 capitalize transition duration-500 ease-in-out focus:outline-none focus:text-gray-900 hover:text-gray-900 sm:leading-13">
                  Compare Properties
                </NavLink>
                <NavLink
                  to={`${match.url}/account-settings`}
                  activeClassName="border-b text-gray-900 border-blue-700"
                  className="block py-2 mr-6 font-medium leading-tight text-center text-blue-600 capitalize transition duration-500 ease-in-out focus:outline-none focus:text-gray-900 hover:text-gray-900 sm:leading-13">
                  Account Settings
                </NavLink>
              </nav>
              <Switch>
                <Route exact path={`${match.path}`} component={TrackHomeBar} />
                <Route
                  path={`${match.path}/saved-properties`}
                  component={SavedProperties}
                />
                <Route
                  path={`${match.path}/compare-properties`}
                  component={CompareProperties}
                />
                <Route
                  path={`${match.path}/account-settings`}
                  component={AccountSettings}
                />
              </Switch>
            </div>
          </main>
        </div>
      </Container>
    </>
  );
};

export default UserDashBoard;
