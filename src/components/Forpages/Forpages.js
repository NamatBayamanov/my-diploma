import classes from "./Forpages.module.scss";


function Forpages({image, children, title}) {
  return ( 
    <div className={classes.Forpages}>
      <div className={classes.background}>
        <div className="container">
          <div className={classes.content}>
            <img name="slideshow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forpages;