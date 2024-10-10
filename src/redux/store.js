import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

const userInfo = (state = [], action) => {
  if (action.type === "ADD_USERINFO") {
    return [...state, action.payload];
  }else if (action.type === "RESET") {
    return [];
  }
  return state;
};

const price = (state = 0, action) => {
  if (action.type === "ADD_PRICE") {
    return Number(state + Number(action.payload));
  } else if (action.type === "REDUCE_PRICE") {
    return Number(state - action.payload);
  }else if (action.type === "RESET") {
    return 0;
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
    let newPayload = {...action.payload, quantity: 1}
    return [...state, newPayload];
  } else if (action.type === "REMOVE_PIZZA") {
    return state.filter((pizza) => pizza !== action.payload)
  }else if (action.type === "RESET") {
    return [];
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
