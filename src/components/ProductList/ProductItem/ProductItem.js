import classes from "./ProductItem.module.scss";
import { Link } from "react-router-dom";

function ProductItem({product}) {

  console.log(product);
  return ( 
    <>
      <div className={classes.ProductItem}>
        <div className={classes.aside}>
          <aside>
            {product.action}
          </aside>
        </div>
        

        <div className={classes.centre}>
          <div className={classes.img__container}>
            <Link to={"/smartphones/" + product.productId}>
              <img src={product.image} alt="#" /></Link>
          </div>
        </div>

        
        <h2>
          {product.title}
        </h2>
        <div className={classes.together}>

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


        <div className={classes.link}>
          <Link to={"/products/" + product.productId}> To move </Link>
        </div>

          
        </div>

        

        
        <ul>
          <li className={classes.price}>
            ${product.price}
          </li>
          <li className={classes.cart}>
            <Link to={"/smartphones/" + product.productId}>
              {product.cart}
            </Link>
          </li>
        </ul>
        
      </div>
    </>
  );
}

export default ProductItem;