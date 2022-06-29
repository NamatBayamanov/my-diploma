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
                <a href="/products">
                  <FaApple/>
                </a>
              </li>
              <li>
                <a href="/products">
                  MEIZU
                </a>
              </li>
              <li>
                <a href="/products">
                  honor
                </a>
              </li>
              <li>
                <a href="/products">
                  <span>
                    MI
                  </span>
                </a>
              </li>
              <li>
                <a href="/products">
                  <span>
                    SAMSUNG
                  </span>
                </a>
              </li>
              <li>
                <a href="/products">
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