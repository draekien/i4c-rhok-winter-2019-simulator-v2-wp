import { combineReducers } from "redux";
import causeReducer from "./causeReducer";

export default combineReducers({
  causes: causeReducer
});
