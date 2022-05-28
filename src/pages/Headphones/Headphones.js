import Header from "../../components/Header/Header";
import classes from "./Headphones.module.scss";
import headphonesImage from "../../assets/headphones.jpg";


function Headphones() {

  return ( 
    <>  
      <div className={classes.Headphones}>
        <div className={classes.background}>
          <div className="container">
            <div className={classes.content}>
              <Header>
              </Header>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Headphones;