import Logo from "../Logo/Logo";
import classes from "./Nav.module.scss";
import { FaSistrix } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Nav() {
  return (
    <>
      <nav className={classes.Nav}>


        <div className={classes.boundless__white}>
          <div className="container">
            <div className={classes.navbar1}>
              <div className={classes.logo}>
                <Logo />
              </div>

              <ul className={`${classes.list1} ${classes.list}`}>

                <li className={classes.phone}>
                  
                  <a href="/">
                    +996 709 266 729
                  </a>
                  <span>
                    <FaPhoneAlt/>
                  </span>
                  <div>
                    Mun-Son: 10:00-22:00
                  </div>
                </li>

                <li>
                  <div className={classes.bottom__borders}>
                    <input type="text" placeholder="Search" aria-label="Search" />
                    <button>
                      <FaSistrix/>
                    </button>

                  </div>
                  
                </li>

                <li>
                  <div className={classes.user}>
                    <a href="/">
                      <FaUserAlt/>
                    </a>
                    <a href="/">
                      <FaHeart/>
                    </a>
                    <a href="/">
                      <FaShoppingCart/>
                    </a>
                  </div>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className={classes.boundless__black}>
          <div className="container">
            <ul className={`${classes.list2} ${classes.list}  `}>

            <div className={classes.collect1}>
              <li>
                  <a href="/">
                    Smartphones
                  </a>
                </li>

                <li>
                  <a href="/">
                    Accessories
                  </a>
                </li>

                <li>
                  <a href="/">
                    Covers
                  </a>
                </li>

                <li>
                  <a href="/">
                    Headphones
                  </a>
                </li>

            </div>

            


              <div className={classes.collect2}>

                <li>
                  <a href="/">
                    Delivery
                  </a>
                </li>

                <li>
                  <a href="/">
                    Warranty
                  </a>
                </li>

              </div>


            </ul>
          </div>
        </div>






      </nav>
    </>
  );
}

export default Nav;