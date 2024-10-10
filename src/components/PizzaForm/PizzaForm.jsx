import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Price from "../Price/Price";

export default function PizzaForm() {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    customer_name: "",
    street_address: "",
    city: "",
    zip: 0,
    type: "",
  });

  const handleNameInput = (event) => {
    setUserInfo({
      ...userInfo,
      name: event.target.value,
    });
  };
  const handleStreetInput = (event) => {
    setUserInfo({
      ...userInfo,
      street_address: event.target.value,
    });
  };
  const handleCityInput = (event) => {
    setUserInfo({
      ...userInfo,
      city: event.target.value,
    });
  };
  const handleZipInput = (event) => {
    setUserInfo({
      ...userInfo,
      zip: event.target.value,
    });
  };
  const handleTypeInput = (event) => {
    setUserInfo({
      ...userInfo,
      type: event.target.value,
    });
  };

  const handleUserInfo = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_USERINFO",
      payload: userInfo,
    });
    event.target.reset();
  };

  //! Need to add the router url
  const handleNext = () => {
    history.push("//");
  };

  return (
    <>
      <Price />
      <form onSubmit={handleUserInfo}>
        <input type="text" onChange={handleNameInput} placeholder="Name" />
        <input type="text" onChange={handleStreetInput} placeholder="Name" />
        <input type="text" onChange={handleCityInput} placeholder="Name" />
        <input type="text" onChange={handleZipInput} placeholder="Name" />
        <input
          type="radio"
          id="Delivery"
          name="Delivery"
          value="Delivery"
          onClick={handleTypeInput}
        />
        <label for="Delivery">Delivery</label>
        <input
          type="radio"
          id="Pickup"
          name="Pickup"
          value="Pickup"
          onClick={handleTypeInput}
        />
        <label for="Pickup">Pickup</label>
        <button type="submit" onClick={handleNext}>
          NEXT
        </button>
      </form>
    </>
  );
}
