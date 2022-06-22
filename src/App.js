
import Layout from "./components/Layout/Layout";
import Accessories from "./pages/Stickers/Stickers";
import Delivery from "./pages/Delivery/Delivery";
import Headphones from "./pages/Headphones/Headphones";
import Home from "./pages/Home/Home";
import Warranty from "./pages/Warranty/Warranty";
import Products from "./pages/Products/Products";
import Product from "./pages/Products/Product/Product";
import Category from "./pages/Categories/Category/Category";
import { Route, Routes } from "react-router-dom";
// import Cases from "./pages/Cases/Cases";
import SubCategory from "./pages/SubCategory/SubCategory";
import Cart from "./pages/Cart/Cart";
// import SubCategories from "./pages/SubCategories/SubCategories";

function App() {
  return (
    <div className="App">
      <>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="stickers" element={<Accessories/>}/>

            <Route path="/products" element={<Products/>}/>

            <Route path="/products/:productId" element={<Product/>}/>
            
            <Route path="/categories/:categoryId" element={<Category/>}/>

            <Route path="/categoryId/:subCategoryId" element={<SubCategory/>}/>

            <Route path="headphones" element={<Headphones/>}/>

            <Route path="delivery" element={<Delivery/>}/>

            <Route path="warranty" element={ <Warranty/>}/>

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
        
        
        
        
        
      

        
      </>
    </div>
  );
}

export default App;
