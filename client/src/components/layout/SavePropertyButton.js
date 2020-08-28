import React from "react";
import AuthContext from "../../context/auth/authContext";
import PropertyContext from "../../context/property/propertyContext";
import SvgIcon from "../svg/SvgIcon";
import { useContext } from "react";

const SavePropertyButton = ({ _id }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;

  const propertyContext = useContext(PropertyContext);
  const { saveProperty } = propertyContext;

  const onSubmit = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      saveProperty({
        user: user._id,
        property: _id,
      });
    }
    console.log({
      user: user._id,
      property: _id,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <button
        type="submit"
        className="text-white cursor-pointer hover:text-red-700">
        <SvgIcon name="heart" className="w-12 h-12 fill-current" />
      </button>
    </form>
  );
};

export default SavePropertyButton;
