// import CartLink from "../../CarLink/CarLink";
import NavItem from "../NavItem/NavItem";
import classes from "./NavBlack.module.scss";




function NavBlack() {
  return ( 
    <div className={classes.NavBlack}>

    <section className={classes.boundless__black}>
          <div className="container">
            <ul className={`${classes.list2} ${classes.list}  `}>

              <div className={classes.collect1}>

                <NavItem url="/" active >
                  Home
                </NavItem>

                <NavItem url="/products">Products</NavItem>

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
              <NavItem url="/categories">Categories</NavItem>
                <NavItem url="/delivery">Delivery</NavItem>
                <NavItem url="warranty">Warranty</NavItem>
                {/* <CartLink/> */}
              </article>
            </ul>
          </div>
        </section>
    </div>
  );
}

export default NavBlack;