import classes from "./Header.module.scss";

// import smartphonesImage from "../../assets/smartphones.jpg";
// import casesImage from "../../assets/cases.jpg";

import chargingImage from "../../assets/charging.jpg";

import headphonesImage from "../../assets/headphones.jpg";

import stickersImage from "../../assets/stickers.jpg";

import smileImage from "../../assets/smile.jpg";

function Header({image, children, title, text}) {


  return ( 
    <>  
      <div className={classes.Header}>
        <div className={classes.background}>
          <div className="container">

            <div className={classes.content}>

              <div className={classes.over__img}>

                  <div className={classes.text__container}>
                        {text}
                  </div>



                  <div className={classes.over__img_container}>
                    <div className={classes.width__img}>
                      <img src={smileImage} alt="#"/>
                    </div>
                  
                    
                </div>
              </div>

              <div className={classes.below__img}>
                <div className={classes.img__container}>
                  <img src={image} alt="#"/>
                  <div className={classes.note}>
                    Could you hover me please.?<br/>
                    <mark>
                    And maybe you will see something...
                    </mark>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;