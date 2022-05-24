import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.scss";



function NavItem({url, children}) {
  return ( 
    <>
      <div className={classes.NavItem}>
        <li>
          <NavLink to={url}>
            {children}
          </NavLink>
        </li>         
      </div>
    </>
  );
}

export default NavItem;