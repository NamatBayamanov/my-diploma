import classes from "./NavToggle.module.scss";
// import {useState} from "react";

function NavToggle({toggle}) {

  // const [actives, setActives] = useState(false);

  // function onToggle() {
  //   setActives(!actives);
  // }

  // const [ switchs, setSwitchs ] = useState([]);

  return (
    <div className={classes.NavToggle} onClick={toggle} >
      <div
        className={`${classes.burger}`}
      
      >
        <span></span>
      </div>
    </div>
  );
}

export default NavToggle;
