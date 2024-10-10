import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";

function Checkout() {
  const dispatch = useDispatch();
  const pizza = useSelector((store) => store.addedPizza);
  const history = useHistory();
  const submit = () => {
    history.push("/");
  };

  return (
    <div>
      <h3>Checkout</h3>
      <table>
        <tbody id="orders">
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
          <tr>
            <td>{pizza.name}</td>
            <td>${pizza.price}</td>
          </tr>
        </tbody>
      </table>

      <Button id="select-pizza" variant="contained" onClick={submit}>
        {" "}
        purchase
      </Button>
    </div>
  );
}

export default Checkout;