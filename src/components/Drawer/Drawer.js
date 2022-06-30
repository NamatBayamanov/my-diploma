
import { Link } from "react-router-dom";
import classes from "./Drawer.module.scss";

import { useSelector } from "react-redux";

function Drawer({ toggle, state }) {

  const isAuthenticated = useSelector(store => store.auth.idToken !== null);

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
            { isAuthenticated ? <Link to="/signout" onClick={toggle}>Sign out</Link> : null }
      { !isAuthenticated ? <Link to="/auth" onClick={toggle}>Sign in</Link> : null }
            </li>
            <li>
            {isAuthenticated ? <Link to='/history' className='btn btn-outline-dark ms-2' onClick={toggle}>Orders</Link> : null}

            </li>
            {/* <li>
              <Link onClick={toggle} to="/delivery">Delivery</Link>
            </li>
            <li>
              <Link onClick={toggle} to="/warranty">Warranty</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
