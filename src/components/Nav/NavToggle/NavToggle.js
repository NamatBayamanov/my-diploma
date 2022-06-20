import classes from "./NavToggle.module.scss";
import {useState} from "react";

function NavToggle({toggle}) {

  const [actives, setActives] = useState(false);

  function onToggle() {
    setActives(!actives);
  }

  const [ switchs, setSwitchs ] = useState([]);
  const Switch = () => {
    setSwitchs(toggle);
    // setActives(!actives);
    // setSwitchs(onToggle);
  }

  return (
    <div className={classes.NavToggle}>
      <div
        className={`${classes.burger} ${actives ? `${classes.active}` : ""}`}
        onClick={Switch}
      >
        <span></span>
      </div>
    </div>
  );
}

export default NavToggle;
