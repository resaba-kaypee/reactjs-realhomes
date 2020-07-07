import {
  GET_PROPERTIES,
  GET_PROPERTIES_BY_LOCATION,
  GET_FEATURED_PROPERTIES,
  GET_PROPERTY,
  CREATE_PROPERTY,
  UPDATE_PROPERTY,
  DELETE_PROPERTY,
  ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PROPERTIES:
    case GET_PROPERTIES_BY_LOCATION:
    case GET_FEATURED_PROPERTIES:
      return {
        ...state,
        properties: action.payload.data,
        loading: false,
      };
    default:
      return state;
  }
};
