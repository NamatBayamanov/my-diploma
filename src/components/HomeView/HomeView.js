import classes from "./HomeView.module.scss";
// import headerImage from "../../assets/header1.jpg";
// import headerImage2 from "../../assets/header2.jpg";
// import headerImage3 from "../../assets/header2.2.jpg";
// import headerImage4 from "../../assets/header3.jpg";

import viewImage from "../../assets/view.jpg";
import viewImage2 from "../../assets/view2.jpg";
import viewImage3 from "../../assets/view3.jpg";
import viewImage4 from "../../assets/view4.jpg";


import HomeViewImg from "./HomeViewImg/HomeViewImg";

import cart from "../../assets/cart/cart.webp";
// import CategoryList from "../CategoryList/CategoryList";
// import { getCategories } from "../../data/Categories";




function HomeView() {

  return (
    <>
      <div className={classes.HomeView}>
        <div className={classes.background}>
          <div className="container">

            <div className={classes.home__flex}>

              <div className={classes.image1}>
                <img src={viewImage} alt="#" />
              </div>



              <div className={classes.content}>


                <div className={classes.watch}>
                  <div className={classes.image2}>
                    <img src={viewImage2} alt="#" />
                  </div>

                  <div className={classes.image3}>
                    <img src={viewImage3} alt="#" />
                  </div>
                </div>

                <div className={classes.image4}>
                  <img src={viewImage4} alt="#" />
                </div>


              </div>



            </div>

            
            {/* <CategoryList categories={getCategories()}/> */}

            <HomeViewImg img={cart}/>
            <HomeViewImg img={cart}/>
          </div>
        </div>


      </div>
    </>
  );
}

export default HomeView;