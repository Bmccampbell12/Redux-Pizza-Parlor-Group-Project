import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

const userInfo = (state = [], action) => {
  if (action.type === "ADD_USERINFO") {
    return action.payload;
  }
  return state;
};

const price = (state = 0, action) => {
  if (action.type === "ADD_PRICE") {
    return state + action.payload;
  } else if (action.type === "REDUCE_PRICE") {
    return state - action.payload;
  }
  return state;
};

const store = createStore(
  combineReducers({
    userInfo,
    price,
  }),
  applyMiddleware(logger)
);

export default store;
