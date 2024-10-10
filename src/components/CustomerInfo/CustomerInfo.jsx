import React, { useState } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";

function CustomerInfo() {
  const dispatch = useDispatch();
  const history = useHistory();

  let [customerInfo, setCustomerInfo] = useState({
    name: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
  });
  const handleChangeFor = (value) => {
    event.preventDefault();

    setCustomerInfo({ value });
  };

  console.log(customerInfo);

  const checkout = () => {
    dispatch({ type: "ADD_CUSTOMER_INFO", payload: customerInfo });
    history.push("/checkout");
  };
  return (
    <div id="customer-info">
      <h3>Customer Information</h3>

      <form>
        <input
          placeholder="Name"
          value={customerInfo.name}
          onChange={(event) => handleChangeFor(event.target.value)}
        />
        <br/>
        <input
          placeholder="Street Address"
          value={customerInfo.streetAddress}
          onChange={(event) => handleChangeFor(event.target.value)}
        />
        <br/>
        <input
          placeholder="City"
          value={customerInfo.city}
          onChange={(event) => handleChangeFor(event.target.value)}
        />

        <br/>
        <input
          placeholder="State"
          value={customerInfo.state}
          onChange={(event) => handleChangeFor(event.target.value)}
        />
        <br/>
        <input
          placeholder="Zip"
          value={customerInfo.zip}
          onChange={(event) => handleChangeFor(event.target.value)}
        />
        <br/>
        <label for="Carryout">Carryout</label>
        <input id="Carryout" name="delivery-carryout"></input>
        <label for="Delivery">Delivery</label>
        <input id="Delivery" name="delivery-carryout"></input>
      </form>

      <Button id="select-pizza" onClick={checkout}>
        {""}
        Next
      </Button>
    </div>
  );
}

export default CustomerInfo;