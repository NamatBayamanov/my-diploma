import { Link, useParams } from "react-router-dom";
import { getCategory } from "../../../data/Categories";
import classes from "./SubCategoryItem.module.scss";



function SubCategoryItem({subCategory}) {

  const params = useParams();

  console.log(params);

  // const category = getCategory(params.categoryid);


  console.log(subCategory)


  return ( 
    <>  
      <div className={classes.SubCategoryItem}>

        <h2>
          {subCategory.title}
        </h2>
        <div className={classes.img__container}>
          <img src={subCategory.image} alt="#"/>   
        </div>
        <Link to={`/categories/category/${subCategory.subCategoryId}`}>
          {subCategory.title}
        </Link>

      </div>
    </>
  );
}

export default SubCategoryItem;