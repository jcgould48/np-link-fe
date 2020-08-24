import {
  AUTH_USER_LOGGED_IN_SUCCESSFUL,
  AUTH_USER_LOGOUT,
} from "../actionTypes/authUserActionType";

import { History } from "../lib/helpers/History/History";

import setAuthToken from "../lib/Axios/setAuthToken";
import Axios from "../lib/Axios/Axios";
import jwt_decode from "jwt-decode";

export const signup = (userInfo) => async (dispatch) => {
  try {
    console.log("user info", userInfo)
    await Axios.post("/users/sign-up", userInfo);
    console.log("user info22", userInfo)
    return Promise.resolve();
  } catch (e) {
    if (e.message) {
      return Promise.reject(e.message);
    } else {
      return Promise.reject(e.response.data.message);
    }
  }
};

export const login = (userInfo) => async (dispatch) => {
  try {
    let success = await Axios.post("/users/login", userInfo);

    let { jwtToken, jwtRefreshToken } = success.data;

    dispatch(setAuthSuccessUser(jwtToken, jwtRefreshToken));

    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e);
  }
};

export const setAuthSuccessUser = (jwtToken, jwtRefreshToken) => (dispatch) => {
  setAuthToken(jwtToken);
  localStorage.setItem("jwtToken", jwtToken);
  localStorage.setItem("jwt-refresh-Token", jwtRefreshToken);

  let decoded = jwt_decode(jwtToken);

  dispatch({
    type: AUTH_USER_LOGGED_IN_SUCCESSFUL,
    payload: decoded,
  });
};

export const checkReloadIfTokenExistAndNotExpired = (decoded) => (dispatch) => {
  dispatch({
    type: AUTH_USER_LOGGED_IN_SUCCESSFUL,
    payload: decoded,
  });
};

export const logout = () => async(dispatch) => {
  try{
  await Axios.get("/users/logout");
  console.log("logout")
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("jwt-refresh-Token");
  setAuthToken(false);
  History("/login");

  return Promise.resolve();
} catch (e) {
  return Promise.reject(e);
}
};

// export const testSignup = (userInfo) => async (dispatch) => {
//   try {
//     console.log("New User Form", userInfo)
//     await Axios.post("/users/sign-up", userInfo);
//     return Promise.resolve();
//   } catch (e) {
//     if (e.message) {
//       return Promise.reject(e.message);
//     } else {
//       return Promise.reject(e.response.data.message);
//     }
//   }
// };