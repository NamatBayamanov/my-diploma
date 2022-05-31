import CategoryItem from "./CategoryItem/CategoryItem";
import classes from "./CategoryList.module.scss";

function CategoryList({categories}) {

  const categoryItems = categories.map( category => (<CategoryItem key={category.categoryId} category={category} />) );

  return ( 
    <>
      <div className={classes.CategoryList}>
        <div className={classes.background}>
          <div className="container">
            <div className={classes.content}>
              {categoryItems}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryList;