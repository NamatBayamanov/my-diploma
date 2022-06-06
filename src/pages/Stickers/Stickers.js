// import Header from "../../components/Header/Header";
import classes from "./Stickers.module.scss";

import stickersImage from "../../assets/stickers1.jpg";

import smileImage from "../../assets/smile.jpg";

function Stickers() {
  return ( 
    <>
      <div className={classes.Stickers}> 
        <div className={classes.background}>
          <div className="container">


            <main className={classes.content}>
              <div className={classes.over__img}>

                  <div className={classes.text__container}>


                  You are in section of Stickers
                      and if you want to know what is it?
                      So then enter these products ↓ 'thanks'.



                  
                    
                  </div>



                  <section className={classes.over__img_container}>
                    <div className={classes.width__img}>
                      <img src={smileImage} alt="#"/>
                    </div>
                  
                    
                </section>
              </div>

              <article className={classes.below__img}>
                <div className={classes.img__container}>
                  <img src={stickersImage} alt="#"/>
                  <div className={classes.note}>
                      
                  Could you hover me please.?<br/>
                  <mark>
                      And maybe you will see something...
                      </mark>
                  </div>
                </div>
              </article>
              
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stickers;