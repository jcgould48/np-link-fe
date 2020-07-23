import {
    GET_RELEVANT_ORGANIZATIONS,
    LIKED_ORGANIZATION,
    DISLIKED_ORGANIZATION
  } from "../actionTypes/selectorActionType";
  import Axios from "../lib/Axios/Axios";
  
  export const getRelevantOrganizations = (orgInfo) => async (dispatch) => {
    try {
    //   console.log("step2")
      let success = await Axios.get("/api/organizations/get-relevant-orgs", orgInfo);
  
      dispatch({
        type: GET_RELEVANT_ORGANIZATIONS,
        payload: success.data,
      });
    } catch (e) {
      return Promise.reject(e.response.data.message);
    }
  };

  export const likedOrganization = (orgInfo) => async (dispatch) => {
    try {
        // console.log("liked org", orgInfo)
      let success = await Axios.put("/api/organizations/like-organization", orgInfo);
  
      // console.log("dispatch", success.data)
      dispatch({
        type: LIKED_ORGANIZATION,
        payload: success.data,
      });
    } catch (e) {
      return Promise.reject(e.response.data.message);
    }
  };
  export const dislikedOrganization = (orgInfo) => async (dispatch) => {
    try {
        // console.log("disliked org", orgInfo)
      let success = await Axios.put("/api/organizations/dislike-organization", orgInfo);
  
      dispatch({
        type: DISLIKED_ORGANIZATION,
        payload: success.data,
      });
    } catch (e) {
      return Promise.reject(e.response.data.message);
    }
  };