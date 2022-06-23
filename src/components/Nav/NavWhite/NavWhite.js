import Logo from "../../ui/Logo/Logo";
import NavToggle from "../NavToggle/NavToggle";
import classes from "./NavWhite.module.scss";

import { FaSistrix } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import CartLink from "../../CarLink/CarLink";

function NavWhite({toggle}) {
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
                    <input
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button>
                      <FaSistrix />
                    </button>
                  </div>
                </li>

                <li>
                  <div className={classes.user}>
                    <a href="/">
                      <FaUserAlt />
                    </a>
                    <a href="/">
                      <FaHeart />
                    </a>
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