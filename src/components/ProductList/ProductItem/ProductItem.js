import classes from "./ProductItem.module.scss";

import { Link } from "react-router-dom";

function ProductItem({product}) {
  return ( 
    <>
      <div className={classes.ProductItem}>
        <aside>
          {product.action}
        </aside>
        <div className={classes.img__container}>
          <img src={product.image} alt="#"/>
        </div>
        <h2>
          {product.title}
        </h2>
        <div className={classes.rating}>
          <span>
            <img src={product.rating1} alt="#"/>
          </span>
          <span>
            <img src={product.rating2} alt="#"/>
          </span>
          <span>
            <img src={product.rating3} alt="#"/>
          </span>
          <span>
            <img src={product.rating4} alt="#"/>
          </span>
          <span>
            <img src={product.rating5} alt="#"/>
          </span>
          <article>
            {product.grade}
          </article>
        </div>

        <div>
          <Link to={product.productId}> To move </Link>
        </div>

        <ul>
          <li className={classes.price}>
            {product.price}
          </li>
          <li className={classes.cart}>
            {product.cart}
          </li>
        </ul>
        
      </div>
    </>
  );
}

export default ProductItem;