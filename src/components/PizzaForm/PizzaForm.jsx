import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Price from "../Price/Price";

export default function PizzaForm() {
  const dispatch = useDispatch();
  const history = useHistory();

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
      customer_name: event.target.value,
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
    history.push("/checkout");
  };

  // const handleNext = () => {
  // };

  return (
    <>
      <Price />
      <form onSubmit={handleUserInfo}>
        <input type="text" onChange={handleNameInput} placeholder="Name" />
        <input
          type="text"
          onChange={handleStreetInput}
          placeholder="Street Address"
        />
        <input type="text" onChange={handleCityInput} placeholder="City" />
        <input type="text" onChange={handleZipInput} placeholder="Zip Code" />
        <input
          type="radio"
          id="Delivery"
          name="pizza"
          value="Delivery"
          onClick={handleTypeInput}
        />
        <label htmlFor="Delivery">Delivery</label>
        <input
          type="radio"
          id="Pickup"
          name="pizza"
          value="Pickup"
          onClick={handleTypeInput}
        />
        <label htmlFor="Pickup">Pickup</label>
        <button type="submit">
          NEXT
        </button>
      </form>
    </>
  );
}
