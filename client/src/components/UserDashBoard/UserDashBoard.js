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
import SvgIcon from "../SvgIcon";

const Tabs = (props) => {
  const [selected, setSelected] = useState(props.selected);
  const handleChange = (index) => {
    setSelected(index);
  };
  return (
    <div className="flex w-full mt-24 mb-16 overflow-hidden md:mt-16">
      <main className="flex flex-col flex-1 overflow-y-auto transition duration-500 ease-in-out">
        <div className="mx-10 my-2">
          <nav className="flex flex-row justify-between transition duration-500 ease-in-out border-b">
            <div className="flex flex-col w-full sm:flex-row">
              <div className="flex order-2 sm:w-2/3 sm:order-none">
                {props.children.map((item, index) => {
                  let style =
                    index === selected
                      ? "border-b-2 text-green-500 border-green-500"
                      : "";
                  return (
                    <button
                      className={
                        style +
                        " block py-2 mr-6 font-medium text-center capitalize transition duration-500 ease-in-out border-transparent focus:outline-none focus:text-green-500 focus:border-green-500"
                      }
                      key={index}
                      onClick={() => handleChange(index)}>
                      {item.props.title}
                    </button>
                  );
                })}
              </div>
              <div
                className={
                  selected === 1 || selected === 2
                    ? "invisible"
                    : "flex relative items-center sm:w-1/3"
                }>
                <input
                  className="w-full py-5 pl-2 pr-10 bg-transparent focus:border-b-2 focus:border-green-500 focus:outline-none"
                  placeholder="Search"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                  <span className="mr-3 transition duration-500 ease-in-out cursor-pointer hover:text-green-500">
                    <SvgIcon
                      name="search"
                      className="inline-block w-5 h-5 ml-1 fill-current"
                    />
                  </span>
                </div>
              </div>
            </div>
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

const MyHomePage = () => {
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
    </>
  );
};

export default MyHomePage;
