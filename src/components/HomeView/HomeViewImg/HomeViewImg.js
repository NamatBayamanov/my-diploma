import classes from "./HomeViewImg.module.scss";

function HomeViewImg({img}) {
  return ( 
    <div className={classes.HomeViewImg}>
    <div className={classes.shadow}>
              {/* <section className={classes.welcome}>
                Welcome!
              </section> */}
            <article className={classes.backdrop}></article>
            <div className={classes.img__container}>
              <img alt="#" src={img}/> 
            </div>
            </div>
    </div>
  );
}

export default HomeViewImg;