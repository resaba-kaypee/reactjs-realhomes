import React, { useState, useContext, useEffect } from "react";

import AuthContext from "../../context/auth/authContext";
import PropertyContext from "../../context/property/propertyContext";

import {
  AccountSettings,
  CompareProperties,
  SavedProperties,
} from "./UserTabs";

import NotLoggedIn from "./NotLoggedIn";
import Spinner from "../Spinner";
import Container from "../Shared/Container";

const Tabs = (props) => {
  const [selected, setSelected] = useState(props.selected);
  const handleChange = (index) => {
    setSelected(index);
  };
  return (
    <div className="w-full mt-24 mb-16 overflow-hidden md:mt-16">
      <main className="flex flex-col flex-1 overflow-y-auto transition duration-500 ease-in-out">
        <div className="mx-10 my-2">
          <nav className="flex flex-row justify-between my-4 transition duration-500 ease-in-out border-b md:justify-start">
            {props.children.map((item, index) => {
              let style =
                index === selected
                  ? "border-b text-gray-900 border-blue-700"
                  : "text-blue-600";
              return (
                <button
                  className={
                    style +
                    " block py-2 mr-6 font-medium text-center capitalize transition duration-500 ease-in-out focus:outline-none focus:text-gray-900 focus:border-blue-700"
                  }
                  key={index}
                  onClick={() => handleChange(index)}>
                  {item.props.title}
                </button>
              );
            })}
          </nav>
          {props.children[selected]}
        </div>
      </main>
    </div>
  );
};

const Panel = (props) => {
  return <div>{props.children}</div>;
};

const UserDashBoard = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  const propertyContext = useContext(PropertyContext);
  const { getUserPropertyList, user_property_list, loading } = propertyContext;
  const account = sessionStorage.getItem("user");

  useEffect(() => {
    if (isAuthenticated) {
      getUserPropertyList();
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  if (!account) return <NotLoggedIn />;

  return (
    <>
      <Container>
        {user_property_list !== null && !loading ? (
          <Tabs selected={0}>
            <Panel title="Saved Properties">
              <SavedProperties list={user_property_list} />
            </Panel>
            <Panel title="Compared Properties">
              <CompareProperties list={user_property_list} />
            </Panel>
            <Panel title="Account Settings">
              <AccountSettings />
            </Panel>
          </Tabs>
        ) : (
          <Spinner />
        )}
      </Container>
    </>
  );
};

export default UserDashBoard;
