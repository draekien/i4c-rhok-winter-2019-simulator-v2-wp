import { FETCH_CAUSES, SET_CAUSE } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAUSES:
      return {
        ...state,
        items: action.payload
      };
      break;
    default:
      return state;
  }
}
