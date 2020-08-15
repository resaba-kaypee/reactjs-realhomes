import React, { useState } from "react";
import properties from "./data";
import SavedProperties from "./SavedProperties";
import CompareProperties from "./CompareProperties";
import SvgIcon from "../../svg/SvgIcon";

const Tabs = (props) => {
  const [selected, setSelected] = useState(props.selected);
  const handleChange = (index) => {
    setSelected(index);
  };
  return (
    <div className="flex w-full h-screen mt-24 overflow-hidden md:mt-16">
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
                  selected === 1 ? "hidden" : "flex items-center sm:w-1/3"
                }>
                <input
                  className="w-full px-4 py-2 bg-transparent focus:border-b-2 focus:border-green-500 focus:outline-none"
                  placeholder="Search"
                />

                <span className="mr-3 transition duration-500 ease-in-out cursor-pointer hover:text-green-500">
                  <SvgIcon
                    name="search"
                    className="inline-block w-5 h-5 ml-1 fill-current"
                  />
                </span>
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
  return (
    <Tabs selected={0}>
      <Panel title="Saved Properties">
        <SavedProperties properties={properties} />
      </Panel>
      <Panel title="Compared Properties">
        <CompareProperties properties={properties} />
      </Panel>
    </Tabs>
  );
};

export default MyHomePage;
