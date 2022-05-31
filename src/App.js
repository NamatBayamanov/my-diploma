import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Accessories from "./pages/Stickers/Stickers";
import Covers from "./pages/Cases/Cases";
import Delivery from "./pages/Delivery/Delivery";
import Headphones from "./pages/Headphones/Headphones";
import Home from "./pages/Home/Home";
import Warranty from "./pages/Warranty/Warranty";
import Products from "./pages/Products/Products";
import Product from "./pages/Products/Product/Product";

function App() {
  return (
    <div className="App">
      <>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="stickers" element={<Accessories/>}/>

            <Route path="/products" element={<Products/>}/>

            <Route path="/products:productId" element={<Product/>}/>

            <Route path="headphones" element={<Headphones/>}/>

            <Route path="delivery" element={<Delivery/>}/>

            <Route path="warranty" element={ <Warranty/>}/>

          </Routes>
        </Layout>
        
        
        
        
        
      

        
      </>
    </div>
  );
}

export default App;
