import classes from "./Header.module.scss";

// import smartphonesImage from "../../assets/smartphones.jpg";
// import casesImage from "../../assets/cases.jpg";

// import chargingImage from "../../assets/charging.jpg";

// import headphonesImage from "../../assets/headphones.jpg";

// import stickersImage from "../../assets/stickers.jpg";
// import casesImage from "../../assets/cases.jpg";



function Header({image, children, title, text, image2, image3}) {


  return ( 
    <>  
      <div className={classes.Header}>
        <div className={classes.background}>
          <div className="container">
            <article className={classes.content}>
              <div className={classes.img__container}>
                <img src={image} alt="#"/>
              </div>
              <p>
                <p>
                {children}
                </p>
                <span>
                  &nbsp;
                </span>
                <aside>
                  
                </aside>
              </p>
            </article>

          </div>
        </div>
      </div>
    </>
  );
}

export default Header;