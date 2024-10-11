import { useDispatch } from "react-redux";
import { useState } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
      <Card sx={{ width: 345, marginRight:10, marginLeft:10, marginBottom: 5, boxShadow: 3 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={pizza.image_path}
        title={pizza.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pizza.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', height: 100 }}>
          {pizza.description}: {pizza.price}
        </Typography>
      </CardContent>
      <CardActions>
      {inCart === false ? (
          <Button onClick={() => addPizza(pizza)}>Add</Button>
        ) : (
          <Button onClick={() => removePizza(pizza)}>Remove</Button>
        )}
      </CardActions>
    </Card>
    </tr>
  );
}
