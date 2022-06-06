import { Link } from "react-router-dom";
import classes from "./SubCategoryItem.module.scss";



function SubCategoryItem({subCategory}) {
  return ( 
    <>  
      <div className={classes.SubCategoryItem}>

        <h2>
          {subCategory.title}
        </h2>
        <div className={classes.img__container}>
          <img src={subCategory.image} alt="#"/>
        </div>
        <Link to={"/categoryId/" + subCategory.subCategoryId}>
          To move
        </Link>

      </div>
    </>
  );
}

export default SubCategoryItem;