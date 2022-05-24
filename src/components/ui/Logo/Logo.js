import "./Logo.module.scss";
import classes from "./Logo.module.scss";

function Logo() {
  return ( 
    <div className={classes.logo}>
      <h2>
        <a href="/">
          MobileWeb
        </a>
      </h2>
      <span>
        Low prices nearby
      </span>
      
      
    </div>
  );
}

export default Logo;