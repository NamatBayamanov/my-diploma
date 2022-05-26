import Header from "../../components/Header/Header";
import classes from "./Stickers.module.scss";


import stickersImage from "../../assets/stickers1.jpg";
function Stickers() {
  return ( 
    <>
      <div className={classes.Stickers}> 
        <div className={classes.background}>
          <div className="container">
            <div className={classes.content}>
              <Header image={stickersImage} text="You are in section of Stickers
                      and if you want to know what is it?
                      So then enter these products ↓ 'thanks'."> 
              </Header>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stickers;