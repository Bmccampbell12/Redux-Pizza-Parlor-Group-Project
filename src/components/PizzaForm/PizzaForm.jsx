import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Price from "../Price/Price";
import "./PizzaForm.css";

import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from '@mui/material/Button';

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

  return (
    <>
      <div class="body">
        <div id="header">
          <header>Prime Pizza</header>
          <div id="price">
            <Price />
          </div>
        </div>
        <form onSubmit={handleUserInfo}>
          <TextField
            id="filled-basic"
            variant="filled"
            type="text"
            onChange={handleNameInput}
            placeholder="Name"
            sx={{ backgroundColor: "white", margin: 1 }}
          ></TextField>
          <TextField
            id="filled-basic"
            variant="filled"
            type="text"
            onChange={handleStreetInput}
            placeholder="Street Address"
            sx={{ backgroundColor: "white", margin: 1 }}
          ></TextField>
          <TextField
            id="filled-basic"
            variant="filled"
            type="text"
            onChange={handleCityInput}
            placeholder="City"
            sx={{ backgroundColor: "white", margin: 1 }}
          ></TextField>
          <TextField
            id="filled-basic"
            variant="filled"
            type="text"
            onChange={handleZipInput}
            placeholder="Zip Code"
            sx={{ backgroundColor: "white", margin: 1 }}
          ></TextField>

          <FormControl sx={{margin: 1}}>
            <FormLabel id="type">Delivery or Pickup</FormLabel>
            <RadioGroup aria-labelledby="type" name="radio-buttons-group">
              <FormControlLabel
                value="Delivery"
                control={<Radio />}
                label="Delivery"
                onClick={handleTypeInput}
              />
              <FormControlLabel
                value="Pickup"
                control={<Radio />}
                label="Pickup"
                onClick={handleTypeInput}
              />
            </RadioGroup>
          </FormControl>

          <Button type="submit">NEXT</Button>
        </form>
      </div>
    </>
  );
}
