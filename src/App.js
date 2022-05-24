import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Accessories from "./pages/Accessories/Accessories";
import Covers from "./pages/Covers/Covers";
import Delivery from "./pages/Delivery/Delivery";
import Headphones from "./pages/Headphones/Headphones";
import Smartphones from "./pages/Smartphones/Smartphones";
import Warranty from "./pages/Warranty/Warranty";

function App() {
  return (
    <div className="App">
      <>
        <Layout>
          <Routes>
            <Route path="smartphones" element={<Smartphones/>}/>

            <Route path="accessories" element={<Accessories/>}/>

            <Route path="covers" element={<Covers/>}/>

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
