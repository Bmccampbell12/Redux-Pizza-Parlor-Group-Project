import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import Price from "../Price/Price";

function Checkout() {
  const pizzaCart = useSelector((store) => store.pizzaCart);
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/");
  };

  return (
    <>
      <div>
        <h3>Checkout</h3>
        <table>
          <tbody id="orders">
            <tr>
              <th>Name</th>
              <th>Cost</th>
            </tr>
            {pizzaCart.map((pizza, index) => (
              <tr key={index}>
                <td>{pizza.name}</td>
                <td>${pizza.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        Total Price: <Price />
        <button onClick={handleSubmit}>CHECKOUT</button>
      </div>
    </>
  );
}

export default Checkout;
