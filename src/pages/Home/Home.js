import classes from "./Home.module.scss";
import headerImage from "../../assets/header1.jpg";
import headerImage2 from "../../assets/header2.jpg";
import headerImage3 from "../../assets/header2.2.jpg";
import headerImage4 from "../../assets/header3.jpg";
import CategoryList from "../../components/CategoryList/CategoryList";
import { getCategories } from "../../data/Categories";



function Smartphones() {

  return (
    <>
      <div className={classes.Smartphones}>
        <div className={classes.background}>
          <div className="container">

            <div className={classes.smartphones__flex}>

              <div className={classes.image1}>
                <img src={headerImage} alt="#" />
              </div>



              <div className={classes.content}>


                <div className={classes.watch}>
                  <div className={classes.image2}>
                    <img src={headerImage2} alt="#" />
                  </div>

                  <div className={classes.image3}>
                    <img src={headerImage3} alt="#" />
                  </div>
                </div>

                <div className={classes.image4}>
                  <img src={headerImage4} alt="#" />
                </div>


              </div>



            </div>

            <CategoryList categories={getCategories()}/>
            
          </div>
        </div>


      </div>
    </>
  );
}

export default Smartphones;