import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Price from "../Price/Price";
import PizzaItem from "../PizzaItem/PizzaItem";
import "./PizzaList.css";

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
    <>
      <div id="App">
        <div id="header">
          <header>Prime Pizza</header>
          <div id="price">
            <Price />
          </div>
        </div>
        <h3>Choose Your Pizza:</h3>
        <table>
          <tbody id="list">
            {pizzaList.map((pizza) => (
              <PizzaItem key={pizza.id} pizza={pizza} />
            ))}
          </tbody>
        </table>
        <button onClick={customerInfo}>NEXT</button>
      </div>
    </>
  );
}
