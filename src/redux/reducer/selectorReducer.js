import {
    GET_RELEVANT_ORGANIZATIONS,
    LIKED_ORGANIZATION,
    DISLIKED_ORGANIZATION
    
  } from "../actionTypes/selectorActionType";
  
  const initialState = {
    relevantOrgs: [],
    likedOrgs:[],
    dislikedOrgs:[],
    activeUser : 0
  };
  
//   const newPeople = [...people];
//   const newLikedOrgs = [...likedOrgs];
//   const newDislikedOrgs = [...dislikedOrgs];

  export default function (state = initialState, action) {
      
    switch (action.type) {
    case GET_RELEVANT_ORGANIZATIONS:
        return {
          ...state,
            relevantOrgs: [...action.payload],
        };
        case LIKED_ORGANIZATION:
        return {
          ...state,
          likedOrgs: [...state.likedOrgs, action.payload],
          relevantOrgs: state.relevantOrgs.filter(
               (item)=> item.id !== action.payload[0].id, console.log('reduce here',state.likedOrgs)), 
        };
        case DISLIKED_ORGANIZATION:
          return {
            ...state,
            dislikedOrgs: [state.likedOrgs, ...action.payload],
            relevantOrgs: state.relevantOrgs.filter(
                 (item)=> item.id !== action.payload[0].id),
            };
          default:
            return state;
        }
    }
  