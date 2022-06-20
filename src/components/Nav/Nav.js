import classes from "./Nav.module.scss";
import NavBlack from "./NavBlack/NavBlack";
import NavWhite from "./NavWhite/NavWhite";

function Nav({toggle}) {

  return (
    <>
      <nav className={classes.Nav}>
        <NavWhite toggle={toggle} />
        <NavBlack />
      </nav>
    </>
  );
}

export default Nav;
