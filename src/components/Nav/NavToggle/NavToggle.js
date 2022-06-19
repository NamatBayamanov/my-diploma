import classes from "./NavToggle.module.scss";
import {useState} from "react";

function NavToggle() {

  const [actives, setActives] = useState(false);

  function onToggle() {
    setActives(!actives);
  }

  return (
    <div className={classes.NavToggle}>
      <div
        className={`${classes.burger} ${actives ? `${classes.active}` : ""}`}
        onClick={onToggle}
      >
        <span></span>
      </div>
    </div>
  );
}

export default NavToggle;
