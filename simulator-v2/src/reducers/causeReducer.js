import { FETCH_CAUSES, SET_CAUSE, SET_CONTRIBUTION, SET_DEFAULT_CAUSE } from "../actions/types";

const initialState = {
  items: [],
  item: {},
  contribution: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAUSES:
      return {
        ...state,
        items: action.payload
      };
    case SET_CAUSE:
      return {
        ...state,
        item: action.payload
      };
    case SET_DEFAULT_CAUSE:
      return {
        ...state,
        item: action.payload
      };
    case SET_CONTRIBUTION:
      return {
        ...state,
        contribution: action.payload
      };
    default:
      return state;
  }
}
