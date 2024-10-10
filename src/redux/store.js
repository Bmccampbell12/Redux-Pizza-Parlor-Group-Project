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
    return state + Number(action.payload);
  } else if (action.type === "REDUCE_PRICE") {
    return state - action.payload;
  }
  return state;
};

const pizzaList = (state = [], action) => {
  if (action.type === "SET_PIZZA_LIST") {
    return action.payload;
  }
  return state;
};

const pizzaCart = (state = [], action) => {
  if (action.type === "ADD_PIZZA") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE_PIZZA") {
    return state.filter((pizza) => pizza !== action.payload)
  }
  return state;
};

const store = createStore(
  combineReducers({
    userInfo,
    price,
    pizzaList,
    pizzaCart,
  }),
  applyMiddleware(logger)
);

export default store;
