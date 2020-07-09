import React, { useReducer } from 'react';
import axios from 'axios';
import PropertyContext from './propertyContext';
import propertyReducer from './propertyReducer';

import {
  GET_PROPERTIES_BY_LOCATION,
  GET_FEATURED_PROPERTIES,
  GET_PROPERTY,
  CREATE_PROPERTY,
  UPDATE_PROPERTY,
  DELETE_PROPERTY,
  ERROR,
} from '../types';

const PropertyState = (props) => {
  const initialState = {
    properties: null,
    property: null,
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(propertyReducer, initialState);

  // Get all properties by city
  const getPropertiesByLocation = async (query) => {
    try {
      const res = await axios.get(`api/properties/search${query}`);
      console.log('from state', res);
      dispatch({ type: GET_PROPERTIES_BY_LOCATION, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data });
    }
  };

  // Get featured properties
  const getFeaturedProperties = async () => {
    try {
      const res = await axios.get(`/api/featured-properties`);
      dispatch({ type: GET_PROPERTIES_BY_LOCATION, payload: res.data });
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

  // Create property
  const createPropety = () => {};
  // Update property
  const updatePropety = () => {};
  // Delete property
  const deletePropety = () => {};

  return (
    <PropertyContext.Provider
      value={{
        properties: state.properties,
        property: state.property,
        error: state.error,
        loading: state.loading,
        getPropertiesByLocation,
        getFeaturedProperties,
        getProperty,
        createPropety,
        updatePropety,
        deletePropety,
      }}
    >
      {props.children}
    </PropertyContext.Provider>
  );
};

export default PropertyState;
