import { FETCH_CAUSES, SET_CAUSE, SET_CONTRIBUTION, SET_DEFAULT_CAUSE } from "./types";
import causes from "../data/causeInfo.json";

export const fetchCauses = () => dispatch => {
  dispatch({
    type: FETCH_CAUSES,
    payload: causes
  });
};

export const setCause = causeName => dispatch => {
  var causeItem;
  causes.map(cause => (cause.cause === causeName ? (causeItem = cause) : false));
  dispatch({
    type: SET_CAUSE,
    payload: causeItem
  });
};

export const setContribution = (balance, percentage) => dispatch => {
  var contribution = { balance: balance, percentage: percentage };
  dispatch({
    type: SET_CONTRIBUTION,
    payload: contribution
  });
};

export const setDefaultCause = () => dispatch => {
  var cause = causes[0];
  dispatch({
    type: SET_DEFAULT_CAUSE,
    payload: cause
  });
};
