import React from "react";
import "./App.css";
import PizzaList from "../PizzaList/PizzaList";
import PizzaForm from "../PizzaForm/PizzaForm";
import Checkout from "../Checkout/Checkout";
import axios from "axios";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Admin from "../Admin/Admin";

function App() {
  const dispatch = useDispatch();

  const fetchPizzaList = () => {
    axios
      .get("/api/pizza")
      .then((response) => {
        dispatch({ type: `SET_PIZZA_LIST`, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        alert(`Couldn't get pizza.`);
      });
  };

  return (
    <Router>
      <div className="App">
        <Route path="/" exact>
          <PizzaList fetchPizzaList={fetchPizzaList} />
        </Route>
        <Route path="/userInfo">
          <PizzaForm />
        </Route>
        <Route path="/checkout">
          <Checkout fetchPizzaList={fetchPizzaList} />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </div>
    </Router>
  );
}

export default App;
