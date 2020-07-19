import {
  GET_PROPERTIES_BY_LOCATION,
  GET_FEATURED_PROPERTIES,
  GET_SIMILAR_PROPERTIES,
  GET_PROPERTY,
  SET_STATE_SEARCH,
  SET_HISTORY_SEARCH,
  CREATE_PROPERTY,
  UPDATE_PROPERTY,
  DELETE_PROPERTY,
  ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SIMILAR_PROPERTIES:
    case GET_PROPERTIES_BY_LOCATION:
      return {
        ...state,
        properties: action.payload.data,
        loading: false,
      };
    case GET_FEATURED_PROPERTIES:
      return {
        ...state,
        featured: action.payload.data,
        loading: false,
      };
    case GET_PROPERTY:
      return {
        ...state,
        property: action.payload.data,
        loading: false,
      };
    case SET_STATE_SEARCH:
      localStorage.setItem('location', action.payload);
      return {
        ...state,
        state_search: action.payload,
      };
    case SET_HISTORY_SEARCH:
      localStorage.setItem('history', action.payload);
      return {
        ...state,
        history_search: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
