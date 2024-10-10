import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

function PizzaList() {
    const [newPizza, setNewPizza] = useState({ name: "", price: 0 });
  
    const pizzaList = useSelector((store) => store.pizzaList);
    const history = useHistory();
  
    const dispatch = useDispatch();
  
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
  
  const storePizza = (pizza) => {
    setNewPizza({
      name: pizza.name,
      price: pizza.price,
    });
    dispatch({ type: "ADD_PIZZA", payload: newPizza });
  };

  const removePizza = () => {
    dispatch({
      
    })
  }


  // Check this
  const customerInfo = () => {
    history.push("/customerinfo");
  };

  console.log(newPizza);

  return (
    <div id="App">
      <h3>Choose Your Pizza:</h3>
      <table>
        <tbody id="list">
          {pizzaList.map((pizza, index) => (
            <tr id="rows" key={index}>
              <td id="names">{pizza.name}</td>
              <td id="description">{pizza.description}</td>
              <td id="price">{pizza.price} </td>
              <td id="button">
                <button onClick={() => storePizza(pizza)}>Add</button>
                <button onClick={removePizza}>Remove</button>
                {/* <Button variant="contained" onClick={() => storePizza(pizza)}>
                  Order
                </Button>{""} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          <button onClick={customerInfo}>NEXT</button>
      {/* <Button id="customer-info" variant="contained" onClick={customerInfo}>
        {" "}
        Next
      </Button> */}
    </div>
  );
}