import {
    CREATE_ORGANIZATION,
    GET_ALL_ORGANIZATIONS,
    MARK_INTERESTED,
    MARK_NOT_INTERESTED
   
  } from "../actionTypes/organizationActionType";
  import Axios from "../lib/Axios/Axios";
  
  export const createOrganization = (orgInfo) => async (dispatch) => {
    try {
      console.log("step2", orgInfo)
      let success = await Axios.post("/api/organizations/create-org", orgInfo);
  
      dispatch({
        type: CREATE_ORGANIZATION,
        payload: success.data,
      });
    } catch (e) {
      return Promise.reject(e.response.data.message);
    }
  };
  export const getAllOrganizations = (orgInfo) => async (dispatch) => {
    try {
      let success = await Axios.post("/api/organizations/create-org", orgInfo);
  
      dispatch({
        type: GET_ALL_ORGANIZATIONS,
        payload: success.data,
      });
    } catch (e) {
      return Promise.reject(e.response.data.message);
    }
  };

  export const interestedOrg = (orgInfo) => async (dispatch) => {
    try {
      let success = await Axios.post("/api/organizations/create-org", orgInfo);
  
      dispatch({
        type: MARK_INTERESTED,
        payload: success.data,
      });
    } catch (e) {
      return Promise.reject(e.response.data.message);
    }
  };
  export const notInterestedOrg = (orgInfo) => async (dispatch) => {
    try {
      let success = await Axios.post("/api/organizations/create-org", orgInfo);
  
      dispatch({
        type: MARK_NOT_INTERESTED,
        payload: success.data,
      });
    } catch (e) {
      return Promise.reject(e.response.data.message);
    }
  };