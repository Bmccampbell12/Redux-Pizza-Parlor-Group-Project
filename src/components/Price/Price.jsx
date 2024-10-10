import { useSelector } from "react-redux";

export default function Price() {
  const price = useSelector((store) => store.price);

  return (
    <div>
      <p>${price}</p>
    </div>
  );
}
