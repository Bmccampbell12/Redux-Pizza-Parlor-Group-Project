import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector,useDispatch } from "react-redux";
import Price from "../Price/Price";
import axios from "axios";

function Checkout({fetchPizzaList}) {
  const pizzaCart = useSelector((store) => store.pizzaCart);
  const price = useSelector((store) => store.price)
  const userInfo = useSelector((store) => store.userInfo)

  const history = useHistory();

  let currentUserInfo = userInfo[0]

  let pizzaData = {
    pizzas: pizzaCart,
    total: price,
    customer_name: currentUserInfo.customer_name,
    street_address: currentUserInfo.street_address,
    city: currentUserInfo.city,
    zip: currentUserInfo.zip,
    type: currentUserInfo.type
  }
  
const dispatch = useDispatch()


  const handleSubmit = () => {
    axios
      .post("/api/order", pizzaData)
      .then((response) => { 
        history.push("/");
        // Clear reducers here
        dispatch({
          type: "RESET"
        })
        // fetchPizzaList()
      })
      .catch((err) => {
        console.error(err);
      });
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
