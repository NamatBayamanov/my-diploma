import classes from "./Categories.module.scss";
import { getCategories } from "../../data/Categories";
import CategoryList from "../../components/CategoryList/CategoryList";


function Categories() {
  return ( 
    <>
      <div className={classes.Categories}>
        <div className={classes.background}>
          <div className="container">
            <div className={classes.content}>
              <CategoryList categories={getCategories()}/>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;