import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Price from "../Price/Price";
import PizzaItem from "../PizzaItem/PizzaItem";

export default function PizzaList({ fetchPizzaList }) {
  const pizzaList = useSelector((store) => store.pizzaList);
  const history = useHistory();

  useEffect(() => {
    fetchPizzaList();
  }, []);

  const customerInfo = () => {
    history.push("/userInfo");
  };

  return (
    <div id="App">
      <h3>Choose Your Pizza:</h3>
      <h4>
        <Price />
      </h4>
      <table>
        <tbody id="list">
          {pizzaList.map((pizza) => (
            <PizzaItem key={pizza.id} pizza={pizza} />
          ))}
        </tbody>
      </table>
      <button onClick={customerInfo}>NEXT</button>
    </div>
  );
}
