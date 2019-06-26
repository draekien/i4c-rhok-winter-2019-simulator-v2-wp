import { FETCH_CAUSES, SET_CAUSE } from "./types";
import causes from "../data/causeInfo.json";

export const fetchCauses = () => dispatch => {
  dispatch({
    type: FETCH_CAUSES,
    payload: causes
  });
};
