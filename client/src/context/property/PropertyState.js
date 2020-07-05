import React, { useReducer } from 'react';
import axios from 'axios';
import PropertyContext from './propertyContext';
import propertyReducer from './propertyReducer';

import {
  GET_PROPERTIES,
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

  // Get all properties
  const getProperties = async () => {
    try {
      const res = await axios.get('api/v1/properties');
      console.log('from state', res.data);
      dispatch({ type: GET_PROPERTIES, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err });
    }
  };

  // Get property
  const getProperty = () => {};
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
        getProperties,
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
