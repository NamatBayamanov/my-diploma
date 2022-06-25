import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/cartSlice/cartSlice";
import classes from "./CartButton.module.scss";
export default function CartButton({ productId }) {

  console.log(productId);

  const dispatch = useDispatch();

  function onAddToCart() {
    // dispatch({ type: 'cart/add', payload: productId }); 
    dispatch(add(productId));
  }

  return (
    <button className={classes.CartButton} onClick={onAddToCart}>Add to cart</button>
  );
}