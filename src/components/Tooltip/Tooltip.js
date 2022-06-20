import Brands from "../Brands/Brands";
import Nav from "../Nav/Nav";
import classes from "./Tooltip.module.scss";



function Tooltip() {
  return ( 

    <div className={classes.Tooltip}>
      <Nav/>
      <Brands/>

      
    </div>
  );
}

export default Tooltip;