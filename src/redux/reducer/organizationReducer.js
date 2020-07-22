import {
    CREATE_ORGANIZATION,
    GET_ALL_ORGANIZATIONS,
    MARK_INTERESTED,
    MARK_NOT_INTERESTED,
    DELETE_ORGANIZATION,
    APPROVE_ORGANIZATION
    
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
      
      case DELETE_ORGANIZATION:
        return {
          ...state,
          organizations: state.createdItems.filter(
               (item)=> item._id !== action.payload._id)
        };
      // case EDIT_ORGANIZATION:
      //   let mapper2 = state.organizations.map(item => {
      //       if (item._id === action.payload._id) {
      //         return {
      //           ...item,
      //           availability:false,
      //         }
      //       }
      //       return item
      //     });
        // return {
        //   ...state,
        //   rentalItems: mapper2
        //   };
      case APPROVE_ORGANIZATION:
        let approver = state.organizations.map(item => {
            if (item._id === action.payload._id) {
              return {
                ...item,
                approved:true,
              }
            }
            return item
          });
        return {
          ...state,
          organizations: approver
          };
      
      default:
        return state;
    }
  }