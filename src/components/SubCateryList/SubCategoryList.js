import SubCategoryItem from "./SubCategoryItem/SubCategoryItem";
import classes from "./SubCategoryList.module.scss";


function SubCategoryList({subCategories}) {

  const subCategoryItems = subCategories.map(
    (subCategory) => (
      <SubCategoryItem key={subCategory.subCategoryId} subCategory={subCategory}/>
    )
  );


  return ( 
    <>
      <div className={classes.SubCategoryList}>
        <div className={classes.background}>
          <div className="container">
          <h1>
            All categories
          </h1>
            <div className={classes.content}>
                {subCategoryItems}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubCategoryList;