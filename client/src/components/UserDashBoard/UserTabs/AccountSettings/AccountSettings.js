import React, { useContext, useEffect, useState } from "react";

import AuthContext from "../../../../context/auth/authContext";
import UserToast from "../../../Notification/UserToast";

import SvgIcon from "../../../SvgIcon";

const AccountSettings = () => {
  const authContext = useContext(AuthContext);
  const {
    isAuthenticated,

    updatePassword,
    updateUser,
    user,
  } = authContext;

  const userPhoto = user && isAuthenticated ? user.photo : "default.jpg";

  const [imageName, setImageName] = useState("Upload new photo");
  const [isEmptyInfo, setIsEmptyInfo] = useState(true);
  const [isEmptyPassword, setIsEmptyPassword] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const [identification, setIdentification] = useState({
    email: "",
    name: "",
    photo: {},
    password: "",
    passwordConfirm: "",
    passwordCurrent: "",
  });

  const {
    email,
    name,
    password,
    passwordConfirm,
    passwordCurrent,
    photo,
  } = identification;

  useEffect(() => {
    setIsEmptyInfo(true);
    setIsEmptyPassword(true);
    if (email || name || imageName !== "Upload new photo") {
      setIsEmptyInfo(false);
    }

    if ((password, passwordConfirm, passwordCurrent)) {
      setIsEmptyPassword(false);
    }
  }, [email, imageName, name, password, passwordConfirm, passwordCurrent]);

  const onChange = (e) => {
    setIdentification({ ...identification, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setIdentification({
      ...identification,
      photo: e.target.files.item(0),
    });
    setImageName(e.target.files.item(0).name);
    setIsVisible(true);
  };

  const removeUpload = () => {
    setImageName("Upload new photo");
    setIsVisible(false);
  };

  const handleUpdateUser = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("photo", photo);

    updateUser(formData);
  };

  const handleUpdatePassword = () => {
    updatePassword(identification);
  };

  const onUpdateUser = (e) => {
    e.preventDefault();
    handleUpdateUser();
    setIdentification({
      email: "",
      name: "",
      photo: {},
      password: "",
      passwordConfirm: "",
      passwordCurrent: "",
    });
  };

  const onUpdatePassword = (e) => {
    e.preventDefault();
    handleUpdatePassword();
    setIdentification({
      email: "",
      name: "",
      photo: {},
      password: "",
      passwordConfirm: "",
      passwordCurrent: "",
    });
  };

  return (
    <div className="pt-2 my-16 ">
      <UserToast />
      <div className="container mx-auto">
        <div className="w-full max-w-2xl p-6 mx-auto">
          <h2 className="text-2xl text-gray-900">Your Account Settings</h2>
          <form className="pt-4 mt-6 border-t" onSubmit={onUpdateUser}>
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
                  name="name"
                  onChange={onChange}
                  placeholder={
                    user && isAuthenticated ? user.name : "Enter name"
                  }
                  type="text"
                  value={name}
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
                  name="email"
                  onChange={onChange}
                  placeholder={
                    user && isAuthenticated ? user.email : "Enter email"
                  }
                  type="text"
                  value={email}
                />
              </div>
              <div className="flex flex-col justify-between w-full sm:flex-row">
                <div className="flex items-center h-40 px-3 mb-6 sm:w-1/2">
                  <div className="flex w-1/4 overflow-hidden">
                    <img
                      className="object-cover w-16 h-16 rounded-full"
                      src={require(`../../../../../../public/users/${userPhoto}`)}
                      alt="user"
                    />
                  </div>
                  <label className="w-3/4 py-2 ml-6 text-lg font-semibold text-center text-blue-600 transition duration-500 ease-in-out border-b border-transparent border-blue-700 cursor-pointer hover:border-b-2 hover:text-gray-900 hover:border-blue-700 focus-within:border-b-2 focus-within:text-gray-900 focus-within:border-blue-700">
                    <input
                      accept="image/*"
                      className="sr-only"
                      name="photo"
                      onChange={(e) => handlePhoto(e)}
                      type="file"
                    />
                    <div className={isVisible ? "flex justify-between" : ""}>
                      <span className="w-24 truncate">{imageName}</span>
                      <button
                        className={
                          (isVisible ? "" : "hidden") + " hover:text-red-600"
                        }
                        onClick={() => removeUpload()}
                        type="button">
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
                    <button
                      className={`${
                        isEmptyInfo
                          ? "cursor-not-allowed opacity-50"
                          : "hover:border-b-2 hover:text-gray-900 hover:border-blue-700 focus-within:border-b-2 focus-within:text-gray-900 focus:border-blue-700 focus:outline-none hover:bg-gray-100 focus:bg-gray-100"
                      } px-4 py-2 text-xl font-semibold text-center text-blue-600 capitalize transition duration-500 ease-in-out border border-b border-transparent border-blue-400 rounded cursor-pointer `}
                      disabled={isEmptyInfo}
                      type="submit">
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
          <form className="pt-4 mt-6 border-t" onSubmit={onUpdatePassword}>
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
                  name="passwordCurrent"
                  onChange={onChange}
                  placeholder="********"
                  required
                  type="password"
                  value={passwordCurrent}
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
                  name="password"
                  onChange={onChange}
                  placeholder="********"
                  required
                  type="password"
                  value={password}
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
                  name="passwordConfirm"
                  onChange={onChange}
                  placeholder="********"
                  required
                  type="password"
                  value={passwordConfirm}
                />
              </div>
              <div className="relative flex w-full h-12 mt-6">
                <div className="absolute bottom-0 right-0 pr-3">
                  <button
                    className={`${
                      isEmptyPassword
                        ? "cursor-not-allowed opacity-50"
                        : "hover:border-b-2 hover:text-gray-900 hover:border-blue-700 focus-within:border-b-2 focus-within:text-gray-900 focus:border-blue-700 focus:outline-none hover:bg-gray-100 focus:bg-gray-100"
                    } px-4 py-2 text-xl font-semibold text-center text-blue-600 capitalize transition duration-500 ease-in-out border border-b border-transparent border-blue-400 rounded cursor-pointer `}
                    disabled={isEmptyPassword}
                    type="submit">
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
