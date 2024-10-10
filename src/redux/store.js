import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

const userInfo = (state = [], action) => {
  if (action.type === "ADD_USERINFO") {
    return action.payload;
  }
  return state;
};

const store = createStore(
  combineReducers({
    userInfo, 
  }),
  applyMiddleware(logger)
);

export default store;
