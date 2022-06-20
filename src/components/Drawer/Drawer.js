import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import NavBlack from "../Nav/NavBlack/NavBlack";
import Logo from "../ui/Logo/Logo";
import classes from "./Drawer.module.scss";

function Drawer() {
  return (
    <div className={classes.Drawer}>
      <div className={classes.background}>
        <div className={classes.menu}>
          <div className={classes.logo}>
            <h2>
              MobileWeb
            </h2>
          </div>

          <ul className={classes.list}>
              <li>
                <Link to="">
                  Home
                </Link>
              </li>
              <li>
                <Link to="">
                  Products
                </Link>
              </li>
              <li>
                <Link to="">
                  Delivery
                </Link>
              </li>
              <li>
                <Link to="">
                  Warranty
                </Link>
              </li>
            </ul>

        </div>
      </div>
    </div>
  );
}

export default Drawer;
