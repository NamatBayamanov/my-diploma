import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function CartLink() {
  const number = useSelector((store) => {
    return Object.values(store.cart.items).reduce(
      (sum, number) => sum + number,
      0
    );
  });

  return (
    <div>
      <NavLink to="/cart">
        <FaShoppingCart /> <span>
        ({number})
        </span>
      </NavLink>
    </div>
  );
}
