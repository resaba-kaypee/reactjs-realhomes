import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import PropertyContext from "../../context/property/propertyContext";
import SvgIcon from "../svg/SvgIcon";

const SavePropertyButton = ({ _id }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;

  const propertyContext = useContext(PropertyContext);
  const { saveProperty, user_property_list } = propertyContext;

  const [saved, setIsSaved] = useState(false);

  useEffect(() => {
    if (
      user_property_list !== null &&
      user_property_list.some(({ property }) => property._id === _id)
    ) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [user_property_list, _id]);

  const handleSave = () => {
    if (isAuthenticated && user) {
      saveProperty({
        user: user._id,
        property: _id,
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <form onSubmit={onSubmit}>
      <button
        type="submit"
        className="text-white cursor-pointer hover:text-red-700">
        <SvgIcon
          name={saved ? "heart-fill" : "heart-outline"}
          className="w-12 h-12 fill-current"
        />
      </button>
    </form>
  );
};

export default SavePropertyButton;
