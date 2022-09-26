import {Route, Routes} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import Products from "./components//products/Products";
import Contact from "./components/Contact";
import About from "./components/About";
import Cart from "./components/cart/Cart";
import Admin from "./components/admin/Admin";
import Login from "./components/admin/Login";
import PrivateRoutes from "./components/routes/PrivateRoutes";
import PublicRoutes from "./components/routes/PublicRoutes"

function App() {
const adminStatus = useSelector((state) => state.admin.status)
  return (
    <>
        <Routes>
         <Route exact path="/admin" element={<PrivateRoutes Component={adminStatus === "true" ? <Admin/> : <Login/>} />} />
          <Route exact index element={<PublicRoutes Component={<Home/>}/>} />
          <Route exact path="/about" element={<PublicRoutes Component={<About/>}/>} />
          <Route exact path="/contact" element={<PublicRoutes Component={<Contact/>}/>} />
          <Route exact path="/products" element={<PublicRoutes Component={<Products/>}/>} />
          <Route exact path="/cart" element={<PublicRoutes Component={<Cart/>}/>} />
        </Routes>
    </>
  );
}

export default App;
