import Logo from "../Logo/Logo";
import classes from "./Nav.module.scss";


function Nav() {
  return (
    <>
      <nav className={classes.Nav}>

        <div className={classes.boundless__White}>
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
                  <div>
                    Mun-Son: 10:00-22:00
                  </div>
                </li>

                <li>
                  <input type="text" placeholder="Search" aria-label="Search" />
                  <button>
                    
                  </button>
                </li>

                <div>
                  <a href="/">+</a>
                  <a href="/">+</a>
                  <a href="/">+</a>
                </div>
              </ul>
            </div>
          </div>
        </div>


        <div className={classes.boundless__black}>
          <div className="container">
            <ul className={`${classes.list2} ${classes.list}  `}>
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

              <div className={classes.navbar2}>
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