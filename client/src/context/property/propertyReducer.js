import sortBy from '../../utils/sortBy';
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

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_PROPERTY:
    case GET_SIMILAR_PROPERTIES:
    case GET_PROPERTIES_BY_LOCATION:
      return {
        ...state,
        properties: action.payload.data,
        cities: action.payload.cities ? action.payload.cities : null,
        location_states: [
          ...new Set(
            action.payload.data.map((property) => property.location.state)
          ),
        ],
        location_cities: [
          ...new Set(
            action.payload.data.map((property) => property.location.city)
          ),
        ],
        loading: false,
      };
    case GET_FEATURED_PROPERTIES:
      return {
        ...state,
        featured: action.payload.data,
        loading: false,
      };
    case GET_AFFORDABLE_PROPERTIES:
      return {
        ...state,
        affordable: action.payload.data,
      };
    case GET_PROPERTY:
      return {
        ...state,
        property: action.payload.data,
        loading: false,
      };
    case SET_HISTORY_SEARCH:
      localStorage.setItem('history', action.payload);
      return {
        ...state,
        history_search: action.payload,
      };
    case SORT_BY:
      return {
        ...state,
        properties: sortBy(state.properties, action.payload),
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
