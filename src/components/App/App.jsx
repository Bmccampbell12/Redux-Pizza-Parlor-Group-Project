import axios from 'axios';
import React from "react";
import "./App.css";
import PizzaList from "../PizzaList/PizzaList";
import PizzaForm from "../PizzaForm/PizzaForm";
import Checkout from "../Checkout/Checkout";

import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch()

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
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <img src="images/pizza_photo.png" />
        <Route path="/" exact>
          <PizzaList fetchPizzaList={fetchPizzaList} />
        </Route>
        <Route path="/userInfo">
          <PizzaForm />
        </Route>
        <Route path="/checkout">
          <Checkout fetchPizzaList={fetchPizzaList} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
