import Layout from "./components/Layout/Layout";
// import Accessories from "./components/Stickers/Stickers";
// import Delivery from "./pages/Delivery";
// import Headphones from "./pages/Headphones/Headphones";
import Home from "./pages/Home";
// import Warranty from "./pages/Warranty";
import Products from "./pages/Products/Products";
import Product from "./components/Product/Product";
// import Category from "./components/Category/Category";
import { Route, Routes, useParams } from "react-router-dom";
// import Cases from "./pages/Cases/Cases";
// import SubCategory from "./components/SubCategory/SubCategory";
import Cart from "./pages/Cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CheckOut from "./pages/CheckOut";
// import Auth from "./pages/Auth";
// import Categories from "./components/Categories/Categories";
// import Subcategoryy from "./pages/Subcategoryy";

// import { getCategory } from "./data/Categories";

// import { getSubCategory } from "./data/SubCategories";
import SignOut from "./pages/SingOut";
import History from "./pages/History";
import Auth from "./pages/Auth";
import Orders from "./pages/Orders";
// import SubCategories from "./pages/SubCategories/SubCategories";


function App() {

  const params = useParams();

  console.log(params)

  // const category = getCategory(params.categoryid);

  // const id = {...category}

  // const subCategory = getSubCategory();

  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "cart/restore" });
  },[dispatch]);

  return (
    <div className="App">
      <>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>

            {/* <Route path="stickers" element={<Accessories/>}/> */}

            <Route path="/products" element={<Products/>}/>

            <Route path="/products/:productId" element={<Product/>}/>
{/*             
            <Route path="/categories" element={<Categories/>}/> */}

{/* 
            <Route path="/categories/:categoryId" element={<Category/>}/>

            <Route path={`/categories/category/:id`} element={<SubCategory />}/> */}

            {/* <Route path="headphones" element={<Headphones/>}/> */}

            {/* <Route path="delivery" element={<Delivery/>}/> */}

            {/* <Route path="warranty" element={ <Warranty/>}/> */}

            <Route path="/cart" element={<Cart />} />

            <Route path="/checkout" element={<CheckOut />} />

            <Route path="/auth" element={<Auth />} />
            {/* <Route path="/history" element={<History />} /> */}
            <Route path="/history" element={<Orders />} />
            <Route path="/signout" element={<SignOut />} />
          </Routes>
        </Layout>
        
        
        
        
        
      

        
      </>
    </div>
  );
}

export default App;
