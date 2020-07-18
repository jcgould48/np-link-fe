import { createStore, combineReducers } from "redux";
import authUserReducer from "./authUserReducer";
import organizationReducer from "./organizationReducer";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  authUser: authUserReducer,
  organization: organizationReducer,
  form: formReducer
});
