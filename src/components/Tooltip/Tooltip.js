// import Brands from "../Brands/Brands";
// import CartLink from "../CarLink/CarLink";
import Nav from "../Nav/Nav";
import classes from "./Tooltip.module.scss";



function Tooltip({toggle}) {
  return ( 

    <div className={classes.Tooltip}>
      <Nav toggle={toggle}/>
      {/* <Brands/> */}
      {/* <CartLink/> */}
      
    </div>
  );
}

export default Tooltip;