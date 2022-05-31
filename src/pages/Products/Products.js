import classes from "./Products.module.scss";
import ProductList from "../../components/ProductList/ProductList";

import { getProducts } from "../../data/Products";


function Products() {
  return ( 
    <>
      <div className={classes.Products}>
        <div className={classes.background}>
          <div className="container" id="Products">
          <ProductList products={getProducts()} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;