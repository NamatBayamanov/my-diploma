import classes from "./Footer.module.scss";


function Footer() {
  return ( 
    <>
      <div className={classes.Footer}>
        <div className="container">
          <div className={classes.footer__flex}>
            Smartphones from 2022
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;