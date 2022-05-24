import classes from "./Smartphones.module.scss";



function Smartphones() {
  return ( 
    <>
      <div className={classes.Smartphones}>
        <div className={classes.background}>
          <div className="container">
            <div className={classes.content}>
              Smartphones
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Smartphones;