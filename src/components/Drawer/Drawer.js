import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import NavBlack from "../Nav/NavBlack/NavBlack";
import Logo from "../ui/Logo/Logo";
import classes from "./Drawer.module.scss";

function Drawer({ toggle, state }) {
  return (


    <div className={classes.Drawer}>
      <div className={`${classes.background} ${state ? `${classes.none}` : ""  }`} onClick={toggle}>

      </div>

      <div className={`${classes.menu} ${state ? `${classes.close}` : ""  }`}>
        <div className={classes.menu__content}>
          <h2>MobileWeb</h2>

          <ul className={classes.list}>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">Products</Link>
            </li>
            <li>
              <Link to="">Delivery</Link>
            </li>
            <li>
              <Link to="">Warranty</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
