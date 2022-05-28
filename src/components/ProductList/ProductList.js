import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductList.module.scss";


function ProductList({products}) {


  const productItems = products.map((product) => (
    <ProductItem key={product.productId} product={product}/>
  ));

  return ( 
    <>
      <div className={classes.ProductList}>
        <div className={classes.background}>
          <div className="container">
            <div className={classes.content}>
              {productItems}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;