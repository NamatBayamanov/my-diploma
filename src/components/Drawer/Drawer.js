
import { Link } from "react-router-dom";
import classes from "./Drawer.module.scss";

function Drawer({ toggle, state }) {

  return (
    <div className={classes.Drawer}>
      <div
        className={`${classes.background} ${state ? `${classes.none}` : ""}`}
        onClick={toggle}
      ></div>

      <div className={`${classes.menu} ${state ? `${classes.close}` : ""}`}>
        <div className={classes.menu__content}>
          <h2>MobileWeb</h2>

          <ul className={classes.list}>
            <li>
              <Link to="/" onClick={toggle}>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={toggle} to="/products">Products</Link>
            </li>
            <li>
              <Link onClick={toggle} to="/categories">Categories</Link>
            </li>
            <li>
              <Link onClick={toggle} to="/delivery">Delivery</Link>
            </li>
            <li>
              <Link onClick={toggle} to="/warranty">Warranty</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
