import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Price from "../Price/Price";
import PizzaItem from "../PizzaItem/PizzaItem";

export default function PizzaList() {
  const pizzaList = useSelector((store) => store.pizzaList);
  const history = useHistory();

  const dispatch = useDispatch()

  useEffect(() => {
    fetchPizzaList();
  }, []);

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

  //! Add url for router
  const customerInfo = () => {
    history.push("/");
  };

  return (
    <div id="App">
      <h3>Choose Your Pizza:</h3>
      <h4>
        <Price />
      </h4>
      <table>
        <tbody id="list">
          {pizzaList.map((pizza, index) => (
            <PizzaItem key={index} pizza={pizza} />
          ))}
        </tbody>
      </table>
      <button onClick={customerInfo}>NEXT</button>
    </div>
  );
}
