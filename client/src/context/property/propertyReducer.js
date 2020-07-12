import {
  GET_PROPERTIES_BY_LOCATION,
  GET_FEATURED_PROPERTIES,
  GET_PROPERTY,
  CREATE_PROPERTY,
  UPDATE_PROPERTY,
  DELETE_PROPERTY,
  ERROR,
  GET_SIMILAR_PROPERTIES,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SIMILAR_PROPERTIES:
    case GET_PROPERTIES_BY_LOCATION:
    case GET_FEATURED_PROPERTIES:
      return {
        ...state,
        properties: action.payload.data,
        loading: false,
      };
    case GET_PROPERTY:
      return {
        ...state,
        property: action.payload.data,
        loading: false,
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
