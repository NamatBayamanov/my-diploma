import classes from "./Brands.module.scss";
import { FaApple } from "react-icons/fa";

function Brands() {
  return ( 
    <>
      <div className={classes.Brands}>
        <div className={classes.background}>
          <div className="container">
            <ul className={classes.list}>  
              <li>
                <a href="/">
                  <FaApple/>
                </a>
              </li>
              <li>
                <a href="/">
                  MEIZU
                </a>
              </li>
              <li>
                <a href="/">
                  honor
                </a>
              </li>
              <li>
                <a href="/">
                  <span>
                    MI
                  </span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>
                    SAMSUNG
                  </span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>
                    SONY
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;