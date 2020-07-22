import { createStore, combineReducers } from "redux";
import authUserReducer from "./authUserReducer";
import organizationReducer from "./organizationReducer";
import selectorReducer from "./selectorReducer";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  authUser: authUserReducer,
  organization: organizationReducer,
  selector: selectorReducer,
  form: formReducer
});
