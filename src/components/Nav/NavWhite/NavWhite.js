import Logo from "../../ui/Logo/Logo";
import NavToggle from "../NavToggle/NavToggle";
import classes from "./NavWhite.module.scss";

import { FaRegHandPointDown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import CartLink from "../../CarLink/CarLink";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

function NavWhite({toggle}) {
  const isAuthenticated = useSelector(store => store.auth.idToken !== null);
  const sets = [];
  return ( 
    <div className={classes.NavWhite}>
      <article className={classes.boundless__white}>
          <div className="container">

            

            <div className={classes.navbar1}>

              <NavToggle toggle={toggle} />

              <div className={classes.logo}>
                <Logo />
              </div>

              <ul className={`${classes.list1} ${classes.list}`}>
                <li className={classes.phone}>
                  <a href="/">+996 709 266 729</a>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <div>Mun-Son: 10:00-22:00</div>
                </li>

                <li>
                  <div className={classes.bottom__borders}>
                    <div className={classes.backdrop}></div>
                    <input
                      type="text"
                      placeholder="Better prices"
                      value={sets}
                    />
                    <button>
                      {/* <FaMedium/> */}
                      <FaRegHandPointDown/>
                    </button>
                  </div>
                </li>

                <li>
                  <div className={classes.user}>

                  { isAuthenticated ? <Link to="/signout"><FaUserAlt /></Link> : null }
      { !isAuthenticated ? <Link to="/auth"><FaUserAlt /></Link> : null }

                    {/* <a href="/">
                      <FaUserAlt />
                    </a> */}
                    <Link to="/products">
                      <FaHeart />
                    </Link>
                    {/* <a href="/">
                      <FaShoppingCart />
                    </a> */}
                    <CartLink/>
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </article>
    </div>
  );
}

export default NavWhite;