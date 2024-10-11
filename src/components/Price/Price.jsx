import { useSelector } from "react-redux";

export default function Price() {
  const price = useSelector((store) => store.price);
  let roundedPrice = Math.round(price * 100) / 100;

  return <p>${roundedPrice}</p>;
}
