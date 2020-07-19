import {
    CREATE_ORGANIZATION,
    GET_ALL_ORGANIZATIONS,
    MARK_INTERESTED,
    MARK_NOT_INTERESTED,
    APPROVE_ORGANIZATION,
    DELETE_ORGANIZATION
   
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
      console.log("step2")
      let success = await Axios.get("/api/organizations/get-all-orgs", orgInfo);
  
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
  export const deleteOrganization = (id) => async (dispatch) => {
    try {
      console.log("Check?", id)
      let success = await Axios.delete(`/api/organizations/delete-org/${id}`);
  
      dispatch({
        type: DELETE_ORGANIZATION,
        payload: success.data,
      });
    } catch (e) {
      return Promise.reject(e.response.data.message);
    }
  };
  // export const editOrganization = (orgInfo) => async (dispatch) => {
  //   try {
  //     let success = await Axios.post("/api/organizations/create-org", orgInfo);
  
  //     dispatch({
  //       type: MARK_NOT_INTERESTED,
  //       payload: success.data,
  //     });
  //   } catch (e) {
  //     return Promise.reject(e.response.data.message);
  //   }
  // };
  export const approveOrganization = (orgInfo) => async (dispatch) => {
    try {
      // console.log("Check?")
      let success = await Axios.put("/api/organizations/approve-org", orgInfo)
      dispatch({
        type: APPROVE_ORGANIZATION,
        payload: success.data,
      });
      // console.log("PAYLOAD",success.data)
    } catch (e) {
      // console.log("ERROR", e)
      return Promise.reject(e.response.data.message);
    }
  };