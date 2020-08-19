import React, { useState } from "react";
import SvgIcon from "../../svg/SvgIcon";

const AccountSettings = () => {
  const [imageName, setImageName] = useState("Upload new photo");
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    setImageName(e.target.files.item(0).name);
    setIsVisible(true);
  };

  const removeUpload = () => {
    setImageName("Upload new photo");
    setIsVisible(false);
  };
  return (
    <div className="pt-2 my-16 ">
      <div className="container mx-auto">
        <div className="w-full max-w-2xl p-6 mx-auto">
          <h2 className="text-2xl text-gray-900">Your Account Settings</h2>
          <form className="pt-4 mt-6 border-t">
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-8 md:w-full">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="grid-text-1">
                  name
                </label>
                <input
                  className="w-full px-4 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="grid-text-1"
                  type="text"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="w-full px-3 mb-8 md:w-full">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="grid-text-2">
                  email address
                </label>
                <input
                  className="w-full px-4 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="grid-text-2"
                  type="text"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="flex flex-col justify-between w-full sm:flex-row">
                <div className="flex items-center h-40 px-3 mb-6 sm:w-1/2">
                  <div className="flex w-1/4 overflow-hidden">
                    <img
                      className="object-cover w-16 h-16 rounded-full"
                      src={require("../../../assets/img/default.jpg")}
                      alt="user"
                    />
                  </div>
                  <label className="w-3/4 py-2 ml-6 text-lg font-semibold text-center text-green-400 transition duration-500 ease-in-out border-b border-transparent border-green-400 cursor-pointer hover:border-b-2 hover:text-green-500 hover:border-green-500 focus-within:border-b-2 focus-within:text-green-500 focus-within:border-green-500">
                    <input
                      onChange={(e) => handleChange(e)}
                      className="sr-only"
                      type="file"
                      accept="image/*"
                      name="photo"
                    />
                    <div className={isVisible ? "flex justify-between" : ""}>
                      <span className="w-24 truncate">{imageName}</span>
                      <button
                        type="button"
                        onClick={() => removeUpload()}
                        className={
                          (isVisible ? "" : "hidden") + " hover:text-red-600"
                        }>
                        <SvgIcon
                          name="close"
                          className="w-6 h-6 fill-current"
                        />
                      </button>
                    </div>
                  </label>
                </div>
                <div className="relative h-12 mb-6 sm:w-1/2 sm:h-full">
                  <div className="absolute bottom-0 right-0 pr-3">
                    <button className="px-4 py-2 text-xl font-semibold text-center text-green-400 capitalize transition duration-500 ease-in-out border border-b border-transparent border-green-400 rounded cursor-pointer hover:border-b-2 hover:text-green-500 hover:border-green-500 focus-within:border-b-2 focus-within:text-green-500 focus-within:border-green-500">
                      save settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full max-w-2xl p-6 mx-auto">
          <h2 className="text-2xl text-gray-900">Password Change</h2>
          <form className="pt-4 mt-6 border-t">
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-8 md:w-full">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="grid-text-3">
                  current password
                </label>
                <input
                  className="w-full px-4 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="grid-text-3"
                  type="text"
                  placeholder="********"
                  required
                />
              </div>
              <div className="w-full px-3 mb-8 md:w-full">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="grid-text-4">
                  new password
                </label>
                <input
                  className="w-full px-4 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="grid-text-4"
                  type="text"
                  placeholder="********"
                  required
                />
              </div>
              <div className="w-full px-3 mb-8 md:w-full">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                  htmlFor="grid-text-5">
                  confirm password
                </label>
                <input
                  className="w-full px-4 py-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="grid-text-5"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
              <div className="relative flex w-full h-12 mt-6">
                <div className="absolute bottom-0 right-0 pr-3">
                  <button className="px-4 py-2 text-xl font-semibold text-center text-green-400 capitalize transition duration-500 ease-in-out border border-b border-transparent border-green-400 rounded cursor-pointer hover:border-b-2 hover:text-green-500 hover:border-green-500 focus-within:border-b-2 focus-within:text-green-500 focus-within:border-green-500">
                    save password
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
