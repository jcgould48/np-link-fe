import {
  AUTH_USER_LOGGED_IN_SUCCESSFUL,
  AUTH_USER_LOGOUT,
} from "../actionTypes/authUserActionType";

const initialState = {
  isAuthenticated: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_LOGGED_IN_SUCCESSFUL:
      return {
        isAuthenticated: true,
        user: { username: action.payload.username },
      };
    case AUTH_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}
