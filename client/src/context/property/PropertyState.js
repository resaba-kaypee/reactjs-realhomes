import React, { useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PropertyContext from './propertyContext';
import propertyReducer from './propertyReducer';

import {
  GET_ALL_PROPERTY,
  GET_PROPERTIES_BY_LOCATION,
  GET_FEATURED_PROPERTIES,
  GET_AFFORDABLE_PROPERTIES,
  GET_PROPERTY,
  GET_SIMILAR_PROPERTIES,
  SET_HISTORY_SEARCH,
  SORT_BY,
  CREATE_PROPERTY,
  UPDATE_PROPERTY,
  DELETE_PROPERTY,
  ERROR,
} from '../types';

const PropertyState = (props) => {
  const location = useLocation();

  const initialState = {
    properties: null,
    featured: null,
    affordable: null,
    location_state: null,
    location_city: null,
    history_search: localStorage.getItem('history') || null,
    cities: null,
    property: null,
    similar: null,
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(propertyReducer, initialState);

  // Get all properties
  const getAllProperty = async () => {
    try {
      const res = await axios.get('/api/newest');
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

  // Set history search
  const setHistorySearch = (history) => {
    dispatch({ type: SET_HISTORY_SEARCH, payload: history });
  };

  // Sort properties by option
  const sortBy = (option) => {
    dispatch({ type: SORT_BY, payload: option });
  };

  // Create property
  const createProperty = () => {};
  // Update property
  const updateProperty = () => {};
  // Delete property
  const deleteProperty = () => {};

  return (
    <PropertyContext.Provider
      value={{
        properties: state.properties,
        cities: state.cities,
        featured: state.featured,
        affordable: state.affordable,
        history_search: state.history_search,
        location_city: state.location_city,
        location_state: state.location_state,
        property: state.property,
        similar: state.similar,
        error: state.error,
        loading: state.loading,
        getAllProperty,
        getPropertiesByLocation,
        getFeaturedProperties,
        getAffordableProperties,
        getSimilarProperties,
        setHistorySearch,
        getProperty,
        sortBy,
        createProperty,
        updateProperty,
        deleteProperty,
      }}
    >
      {props.children}
    </PropertyContext.Provider>
  );
};

export default PropertyState;
