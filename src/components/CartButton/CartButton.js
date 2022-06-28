import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/cartSlice/cartSlice";
import classes from "./CartButton.module.scss";
export default function CartButton({ productId, subCategoryId }) {

  console.log(productId);
  // console.log(subCategoryId);

  const dispatch = useDispatch();

  function onAddToCart() {
    // dispatch({ type: 'cart/add', payload: productId }); 
    dispatch(add(productId));
    // dispatch(add2(subCategoryId));
  }

  return (
    <button className={classes.CartButton} onClick={onAddToCart}>Add to cart</button>
  );
}