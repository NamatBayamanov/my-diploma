import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.scss";



function NavItem({url, children, active}) {

  // const classNames = [];

  
    // active = "active";


  // className={`${active ? `${classes.active}` : ""}`}

  return ( 
    <>
        <li className={classes.NavItem}>
          <NavLink to={url} active={active}>
            {children}
          </NavLink>
        </li>         
    </>
  );
}

export default NavItem;