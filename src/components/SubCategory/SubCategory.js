// import { useState } from "react";
import { useParams } from "react-router-dom";
import CartButton from "../CartButton/CartButton";
import { getSubCategory } from "../../data/SubCategories";
import classes from "./SubCategory.module.scss";

function SubCategory() {
  const params = useParams();
  console.log(params);

  const subCategory = getSubCategory(params.id);

  console.log(subCategory)

  return (
    <div className={classes.SubCategory}>
      <div className={classes.background}>
        <div className="container">
          
          <div className={classes.content}>
            <div className={classes.img__container}>
              <img width="391" height="500" src={subCategory.image} alt="#" />
              <div className={classes.backdrop}></div>

              <h2>{subCategory.title}</h2>
              <p>{subCategory.description}</p>
              <div className={classes.cartbtn}>
                <CartButton subCategoryId={subCategory.subCategoryId}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubCategory;
