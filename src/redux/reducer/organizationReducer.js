import {
    CREATE_ORGANIZATION,
    GET_ALL_ORGANIZATIONS,
    MARK_INTERESTED,
    MARK_NOT_INTERESTED
    
  } from "../actionTypes/organizationActionType";
  
  const initialState = {
    organizations: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case CREATE_ORGANIZATION:
        return {
          organizations: [...state.organizations, action.payload],
        };
      case GET_ALL_ORGANIZATIONS:
        return {
          organizations: [...action.payload],
        };
      case MARK_INTERESTED:
        let mapper = state.organizations.map(item => {
            if (item._id === action.payload._id) {
              return {
                ...item,
                availability:false,
              }
            }
            return item
          });
        return {
          ...state,
          rentalItems: mapper
          };
      case MARK_NOT_INTERESTED:
        let mapper2 = state.organizations.map(item => {
            if (item._id === action.payload._id) {
              return {
                ...item,
                availability:false,
              }
            }
            return item
          });
        return {
          ...state,
          rentalItems: mapper2
          };
      default:
        return state;
    }
  }