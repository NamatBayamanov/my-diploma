// import CartLink from "../../CarLink/CarLink";

import { useSelector } from "react-redux";
import NavItem from "../NavItem/NavItem";
import classes from "./NavBlack.module.scss";




function NavBlack() {

  const isAuthenticated = useSelector(store => store.auth.idToken !== null);

  return ( 
    <div className={classes.NavBlack}>

    <section className={classes.boundless__black}>
          <div className="container">
            <ul className={`${classes.list2} ${classes.list}  `}>

              <div className={classes.collect1}>

                <NavItem url="/" active >
                  Home
                </NavItem>

                

                {/* <NavItem url="stickers"  >
                Stickers
              </NavItem>
              <NavItem url="cases" active>
                Cases
              </NavItem>
              <NavItem url="headphones">
                Headphones
              </NavItem> */}
              </div>

              <article className={classes.collect2}>
              {/* <NavItem url="/categories">Categories</NavItem> */}
              <NavItem url="/products">Products</NavItem>
                {/* <NavItem url="/delivery">Delivery</NavItem> */}
                {/* <NavItem url="warranty">Warranty</NavItem> */}
                {/* <CartLink/> */}

                { isAuthenticated ? <NavItem url="/signout">Sign out</NavItem> : null }
      { !isAuthenticated ? <NavItem url="/auth">Sign in</NavItem> : null }
              </article>
            </ul>
          </div>
        </section>
    </div>
  );
}

export default NavBlack;