import React from "react";
import "./App.css";
import PizzaList from "../PizzaList/PizzaList";
import PizzaForm from "../PizzaForm/PizzaForm";
import Checkout from "../Checkout/Checkout";

import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <img src="images/pizza_photo.png" />
        <Route path="/" exact>
          <PizzaList />
        </Route>
        <Route path="/userInfo">
          <PizzaForm />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </div>
    </Router>
  );
}

export default App;
