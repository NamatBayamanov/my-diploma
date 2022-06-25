import Header from "../../components/Header/Header";
import image from "../../assets/cart/cart.webp";
import { useSelector } from "react-redux";
import { getProducts } from "../../data/Products";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import classes from "./Cart.module.scss";
function Cart() {
  const styles = {
    display: "inline-block",
    paddingTop: 0.5 + "rem",
    paddingBottom: 0.5 + "rem",
    paddingLeft: 0.8 + "rem",
    paddingRight: 0.8 + "rem",
    border: "2px solid black",
    borderRadius: 0.5 + "rem",
    backgroundColor: "yellow",
  };
  const styles2 = {
    display: "flex",
    gap: 10 + "px",
    alignItems: "center",
    margin: 1 + "rem",
  };
  const styles3 = {
    cursor: "auto",
    color: "black",
  };

  const items = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const products = getProducts();

  let total = 0;

  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      total += product.price * items[product.productId];
      return (
        <div style={styles2} key={product.productId}>
          <Link style={styles3} to="">
            {product.title}
          </Link>{" "}
          {items[product.productId]} ${product.price * items[product.productId]}
          <div>
            <button
              onClick={() =>
                dispatch({ type: "cart/delete", payload: product.productId })
              }
              style={styles}
            >
              Delete
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                dispatch({ type: "cart/increment", payload: product.productId })
              }
              style={styles}
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                dispatch({ type: "cart/decrement", payload: product.productId })
              }
              style={styles}
            >
              -
            </button>
          </div>
        </div>
      );
    });

  if (!output) {
    output = "No items in cart";
  }

  return (
    <div className={classes.Cart}>
      <div className="container">
        <Header title="Your Shopping Cart" image={image}>
          <span>Please review items in your cart.</span>
        </Header>
        <div>
          <div className={classes.table}>
            {output}
            <hr />
            Total: ${total}
          </div>
          <Link to="/checkout">CheckOut</Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;