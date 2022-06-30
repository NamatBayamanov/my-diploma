import ProductList from "../../components/ProductList/ProductList";

import { getProducts } from "../../data/Products";


function Products() {
  return ( 
    <>
      <div>
        <div>
          <div className="container" id="Products">
          <ProductList products={getProducts()} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;