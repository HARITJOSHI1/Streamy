import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import {streamReducer} from "./streamReducer";

const INITIAL_STATE = { isSignedIn: null, userID: null };

const checkAuth = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, userID: action.payload};
    case "SIGN_OUT":
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

export default combineReducers({
  auth: checkAuth,
  form: formReducer,
  streams: streamReducer
});
