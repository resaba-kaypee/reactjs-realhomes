import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import PropertyContext from "../../context/property/propertyContext";
import SvgIcon from "../svg/SvgIcon";

const SavePropertyButton = ({ _id }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;

  const propertyContext = useContext(PropertyContext);
  const {
    saveProperty,
    user_property_list,
    deletePropertyFromList,
  } = propertyContext;

  const [saved, setIsSaved] = useState(false);
  const [propertyId, setPropertyId] = useState(null);

  useEffect(() => {
    // loop tru users property list
    // if a property(props) is in the list(user_property_list) change icon to full heart by toggling [saved] to true
    // else just use outlined heart
    if (
      user_property_list !== null &&
      user_property_list.some(({ property }) => property._id === _id)
    ) {
      setIsSaved(true);
      setPropertyId(
        user_property_list.filter((list) => list.property._id === _id)
      );
    } else {
      setIsSaved(false);
    }
  }, [user_property_list, _id]);

  // handle saving property to user's list
  const handleSave = () => {
    if (isAuthenticated && user) {
      saveProperty({
        user: user._id,
        property: _id,
      });
    }
  };

  const handleDelete = () => {
    if (isAuthenticated && user) {
      deletePropertyFromList(propertyId[0]._id);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!saved) {
      handleSave();
    } else {
      handleDelete();
    }
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
