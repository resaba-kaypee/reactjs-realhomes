import React, { useReducer } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyContext from "./propertyContext";
import propertyReducer from "./propertyReducer";

import {
  GET_ALL_PROPERTY,
  GET_PROPERTIES_BY_LOCATION,
  GET_FEATURED_PROPERTIES,
  GET_AFFORDABLE_PROPERTIES,
  GET_PROPERTY,
  GET_SIMILAR_PROPERTIES,
  SET_HISTORY_SEARCH,
  GET_ALL_APARTMENT,
  SORT_BY,
  GET_USER_PROPERTY_LIST,
  SAVE_PROPERTY,
  DELETE_PROPERTY_FROM_LIST,
  // CREATE_PROPERTY,
  // UPDATE_PROPERTY,
  // DELETE_PROPERTY,
  ERROR,
  CLEAR_ERRORS,
  CLEAR_PROPERTY_LIST,
} from "../types";

const PropertyState = (props) => {
  const location = useLocation();

  const initialState = {
    properties: null,
    results: null,
    cities: null,
    featured: null,
    affordable: null,
    location_states: null,
    location_cities: null,
    history_search: localStorage.getItem("history") || null,
    property: null,
    user_property_list: null,
    similar: null,
    apt_pools: null,
    apt_laundry: null,
    apt_pet: null,
    status: null,
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(propertyReducer, initialState);

  // Get all properties
  const getAllProperty = async () => {
    try {
      const res = await axios.get("/api/newest");
      dispatch({ type: GET_ALL_PROPERTY, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data });
    }
  };

  // Get all properties by state
  const getPropertiesByLocation = async () => {
    try {
      const res = await axios.get(`api/properties/search${location.search}`);
      dispatch({ type: GET_PROPERTIES_BY_LOCATION, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data });
    }
  };

  // Get similar properties
  const getSimilarProperties = async () => {
    try {
      const res = await axios.get(`/api/properties/search${location.search}`);
      dispatch({ type: GET_SIMILAR_PROPERTIES, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data });
    }
  };

  // Get featured properties
  const getFeaturedProperties = async () => {
    try {
      const res = await axios.get(`/api/featured-properties`);
      dispatch({ type: GET_FEATURED_PROPERTIES, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data });
    }
  };

  // Get affordable properties
  const getAffordableProperties = async () => {
    try {
      const res = await axios.get(`api/affordable`);
      dispatch({ type: GET_AFFORDABLE_PROPERTIES, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data });
    }
  };

  // Get property by id
  const getProperty = async (slug) => {
    try {
      const res = await axios.get(`/api/property/${slug}`);
      dispatch({ type: GET_PROPERTY, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data });
    }
  };

  // Get all apartment
  const getAllApartment = async () => {
    try {
      const res = await axios.get(`api/rentals`);
      dispatch({ type: GET_ALL_APARTMENT, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data });
    }
  };

  // Set history search
  const setHistorySearch = (history) => {
    dispatch({ type: SET_HISTORY_SEARCH, payload: history });
  };

  // Sort properties by option
  const sortBy = (option) => {
    dispatch({ type: SORT_BY, payload: option });
  };

  // Get user save property
  const getUserPropertyList = async () => {
    try {
      const res = await axios.get("/api/my-saved-properties");
      dispatch({ type: GET_USER_PROPERTY_LIST, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  // Saved user property
  const saveProperty = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/save-property", data, config);
      dispatch({ type: SAVE_PROPERTY, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  // Delete property from user list
  const deletePropertyFromList = async (_id) => {
    try {
      await axios.delete(`/api/delete-property-from-list/${_id}`);
      dispatch({ type: DELETE_PROPERTY_FROM_LIST, payload: _id });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data.message });
    }
  };

  // Create property
  const createProperty = () => {};
  // Update property
  const updateProperty = () => {};
  // Delete property
  const deleteProperty = () => {};

  // Clear success and error messages
  const clearErrorsProperty = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  // Clear users propperty list upon log out
  const clearPropertyList = () => {
    dispatch({ type: CLEAR_PROPERTY_LIST });
  };

  return (
    <PropertyContext.Provider
      value={{
        properties: state.properties,
        results: state.results,
        cities: state.cities,
        featured: state.featured,
        affordable: state.affordable,
        history_search: state.history_search,
        location_cities: state.location_cities,
        location_states: state.location_states,
        user_property_list: state.user_property_list,
        property: state.property,
        similar: state.similar,
        apt_pools: state.apt_pools,
        apt_laundry: state.apt_laundry,
        apt_pet: state.apt_pet,
        status: state.status,
        error: state.error,
        loading: state.loading,
        getAllProperty,
        getPropertiesByLocation,
        getFeaturedProperties,
        getAffordableProperties,
        getSimilarProperties,
        setHistorySearch,
        getProperty,
        getUserPropertyList,
        saveProperty,
        deletePropertyFromList,
        getAllApartment,
        sortBy,
        createProperty,
        updateProperty,
        deleteProperty,
        clearErrorsProperty,
        clearPropertyList,
      }}>
      {props.children}
    </PropertyContext.Provider>
  );
};

export default PropertyState;
