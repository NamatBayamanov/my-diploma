import classes from "./CheckOut.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../data/Products";
import Header from "../../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import checkoutImage from "../../assets/checkout/checkout.webp";
import { checkout } from "../../redux/slices/cartSlice/cartSlice";
function CheckOut() {

  
  const navigate = useNavigate();

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
          
        </div>
      );
    });

  if (!output) {
    output = "No items in cart";
  }

  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(checkout(Object.fromEntries(formData.entries())));
    navigate('/');
  }

  // image={image}

  return (
    <div className={classes.CheckOut}>
      <div className="container">
        <Header title="CheckOut" image={checkoutImage}> 
          <span>Please enter your information.</span>
        </Header>
        <div>
          <div className={classes.table}>
            {output}
            <hr />
            Total: ${total}
          </div>
          <form onSubmit={onCheckout}>
            <lable>
              first name:
              <input type="text" name="firstName" required/>
            </lable>
            <lable>
              last Name:
              <input type="text" name="lastName" required/>
            </lable>
            <lable>
              address: 
              <input type="text" name="address"  required/>
            </lable>
            <lable>
              Phone:
              <input type="text" name="phone"  required/>
            </lable>
            <button>
              Complete the order.
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;