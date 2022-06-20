import classes from "./Nav.module.scss";
import NavBlack from "./NavBlack/NavBlack";
import NavWhite from "./NavWhite/NavWhite";

function Nav() {

  return (
    <>
      <nav className={classes.Nav}>
        <NavWhite/>
        <NavBlack/>
      </nav>
    </>
  );
}

export default Nav;
