import React, { useReducer } from 'react';
import axios from 'axios';
import PropertyContext from './propertyContext';
import propertyReducer from './propertyReducer';

import {
  GET_SIMILAR_PROPERTIES,
  GET_PROPERTIES_BY_LOCATION,
  GET_FEATURED_PROPERTIES,
  GET_PROPERTY,
  SET_STATE_SEARCH,
  SET_HISTORY_SEARCH,
  CREATE_PROPERTY,
  UPDATE_PROPERTY,
  DELETE_PROPERTY,
  ERROR,
} from '../types';

const PropertyState = (props) => {
  const initialState = {
    properties: null,
    featured: null,
    state_search: null,
    history_search: null,
    property: null,
    similar: null,
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(propertyReducer, initialState);

  // Load history
  const loadHistorySearch = () => {
    if (localStorage.history) {
      getPropertiesByLocation(localStorage.history);
      setStateSearch(localStorage.state);
    }
  };

  // Get all properties by state
  const getPropertiesByLocation = async (queryStr) => {
    try {
      const res = await axios.get(`api/properties/search?${queryStr}`);
      dispatch({ type: GET_PROPERTIES_BY_LOCATION, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data });
    }
  };

  // Get similar properties
  const getSimilarProperties = async (type) => {
    try {
      const res = await axios.get(`/api/properties/search?${type}`);
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

  // Get property by id
  const getProperty = async (slug) => {
    try {
      const res = await axios.get(`/api/property/${slug}`);
      dispatch({ type: GET_PROPERTY, payload: res.data });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.response.data });
    }
  };

  // Set query string
  const setStateSearch = (query) => {
    dispatch({ type: SET_STATE_SEARCH, payload: query });
  };

  // Set history search
  const setHistorySearch = (history) => {
    dispatch({ type: SET_HISTORY_SEARCH, payload: history });
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
        featured: state.featured,
        state_search: state.state_search,
        history_search: state.history_search,
        property: state.property,
        similar: state.similar,
        error: state.error,
        loading: state.loading,
        getPropertiesByLocation,
        getFeaturedProperties,
        getSimilarProperties,
        setStateSearch,
        setHistorySearch,
        loadHistorySearch,
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
