import axios from "axios";

const initialState = {
  user: {},
  loggedIn: false,
  statusError: false
};

const GET_USER = "GET_USER";

export function getUser() {
  console.log("HIT");
  return {
    type: GET_USER,
    payload: axios.get(`${process.env.REACT_APP_SERVER}/api/userprofile`)
  };
}

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload,
        loggedIn: true
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        statusError: true
      };
    default:
      return state;
  }
}

export default profileReducer;
