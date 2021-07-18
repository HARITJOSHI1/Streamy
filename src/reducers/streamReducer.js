import _ from "lodash";

export const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(state, action.payload);

    case "FETCH_STREAMS":
      const tmp = _.mapKeys(action.payload, 'id');
      return { ...state, ...tmp};

    default:
      return state;
  }
};
