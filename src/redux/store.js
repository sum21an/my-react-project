import { createStore, combineReducers, compose } from "redux";
import loginReducers from "./Reducers/LoginReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  loginReducers
});

const store = createStore(rootReducers, composeEnhancers());

export default store;
