import { useDispatch } from "react-redux";
import { useState } from "react";

export default function PizzaItem({ pizza }) {
  const [inCart, setInCart] = useState(false);
  const dispatch = useDispatch();

  const changeCart = () => {
    setInCart(!inCart);
  };

  const addPizza = (pizza) => {
    dispatch({ type: "ADD_PIZZA", payload: pizza });
    dispatch({ type: "ADD_PRICE", payload: pizza.price });
    changeCart(pizza);
  };

  const removePizza = (pizza) => {
    dispatch({ type: "REMOVE_PIZZA", payload: pizza });
    dispatch({ type: "REDUCE_PRICE", payload: pizza.price });
    changeCart(pizza);
  };
  
  return (
    <tr id="rows">
      <td id="names">{pizza.name}</td>
      <td id="description">{pizza.description}</td>
      <td id="price">{pizza.price} </td>
      <td id="button">
        {inCart === false ? (
          <button onClick={() => addPizza(pizza)}>Add</button>
        ) : (
          <button onClick={() => removePizza(pizza)}>Remove</button>
        )}
      </td>
    </tr>
  );
}
