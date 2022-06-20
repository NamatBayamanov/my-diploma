import { Link } from "react-router-dom";
import classes from "./CategoryItem.module.scss";

function CategoryItem({ category }) {
  return (
    <>
      <div className={classes.CategoryItem}>
        <div className={classes.aside}>
          <aside>{category.novelty}</aside>
        </div>

        <div className={classes.centre}>
          <div className={classes.img__container}>
            <Link to={"/categories/" + category.categoryId}>
              <img src={category.image} alt="#" />
            </Link>
          </div>
        </div>

        <h2 className={classes.title}>{category.title}</h2>
        <div className={classes.together}>
          {/* <div className={classes.rating}>
          <span>
            <img src={category.rating1} alt="#"/>
          </span>
          <span>
            <img src={category.rating2} alt="#"/>
          </span>
          <span>
            <img src={category.rating3} alt="#"/>
          </span>
          <span>
            <img src={category.rating4} alt="#"/>
          </span>
          <span>
            <img src={category.rating5} alt="#"/>
          </span>
          <article>
            {category.grade}
          </article>
        </div> */}

          <div className={classes.link}>
            <Link to={"/categories/" + category.categoryId}> |--Go--| </Link>
          </div>
        </div>

        {/* <ul>
          <li className={classes.price}>
            ${category.price}
          </li>
          <li className={classes.cart}>
            <Link to={"/categories/" + category.categoryId}>
              {category.cart}
            </Link>
          </li>
        </ul> */}
      </div>
    </>
  );
}

export default CategoryItem;
