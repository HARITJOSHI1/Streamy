import { combineReducers } from "redux";
import {reducer} from "redux-form";

const INITIAL_STATE = {isSignedIn: null, id: null}

const checkAuth = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {...state, isSignedIn: true, id: action.payload.id};
    case "SIGN_OUT":
      return {...state, isSignedIn: false};
    default:
      return state;
  }
};

export default combineReducers({
  auth: checkAuth,
  form: reducer
});
