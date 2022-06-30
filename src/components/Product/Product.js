import { useParams } from "react-router-dom";
import CartButton from "../CartButton/CartButton";
import { getProduct } from "../../data/Products";
import classes from "./Product.module.scss";



function Product() {
  const params = useParams();

  console.log(params);


  const product = getProduct(params.productId);

  console.log(product)
  return ( 
    <>
      <div className={classes.Product}>
        <div className={classes.background}>
          <div className="container" id="Product">
            <div className={classes.content}>
              
              <div className={classes.img__container}>
                <img src={product.image} alt="#"/>
              </div>

              <div className={classes.block}>
                <h2>
                  {product.title}
                </h2>
                <h3>
                  {product.shortInformation}
                </h3>
                <p>
                  {product.description}
                </p>
                <article>
                  <p className={classes.price}>
                    ${product.price}
                  </p>
                  {/* <Link to="/">
                    {product.buy}
                  </Link> */}
                    <CartButton productId={params.productId}/>
                </article>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;