import classes from "./Footer.module.scss";
import footerImg from "../../assets/delivery/footerimg.svg";

function Footer() {
  return (
    <>
      <div className={classes.Footer}>
        <div className={classes.background}>
          <div className="container">
          
              <div className={classes.content}>
                <div className={classes.footer__flex1}>
                  <article>
                    <h2>Subscribe to news</h2>
                    <p className={classes.footer__size}>
                      Be the first to know about new products and special offers
                    </p>
                  </article>
{/* 
                  <div className={classes.form}>
                    <form>
                      <input type="text" placeholder="Email*" />
                      <button>Subscribe</button>
                    </form>
                  </div> */}
                </div>

                <div className={classes.footer__flex}>
                  <div className={classes.img__container}>
                    <img alt="#" src={footerImg} />
                  </div>
                  <article>
                    <p>+996 709 266 729</p>
                  </article>
                </div>
                <footer>
                  <p>
                    2017-2021 © Mobila.shop Online store for smartphones and
                    accessories. All rights reserved.
                  </p>
                </footer>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
