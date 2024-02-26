import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div className="font-jost">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/sofas' element={<ShopCategory category="sofa"/>}/>
          <Route path='/dining' element={<ShopCategory category="dining"/>}/>
          <Route path='/tables' element={<ShopCategory category="table"/>}/>
          <Route path='/beds' element={<ShopCategory category="bed"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Cart />}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}