import { useParams } from "react-router-dom";
// import CategoryList from "../../../components/CategoryList/CategoryList";
import SubCategoryList from "../../../components/SubCateryList/SubCategoryList";
import { getCategory } from "../../../data/Categories";
import { getSubCategories } from "../../../data/SubCategories";
// import Cases from "../../Cases/Cases";
// import SubCategories from "../../SubCategories/SubCategories";
// import Categories from "../Categories";
import classes from "./Category.module.scss";


function Category() {
  

  const params = useParams();

  const category = getCategory(params.categoryId);
  return ( 
    <>
      <div className={classes.Category}>
        <div className={classes.background}>
          <div className="container">
            <div className={classes.content}>
              {/* <SubCategories/> */}
              <SubCategoryList subCategories={getSubCategories()}/>
            </div>


            
          </div>
        </div>
      </div>
    </>
  );    
}

export default Category;    