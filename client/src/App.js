import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import Cart from "./components/Cart/Cart";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/:name" element={<Navbar />}></Route>
          <Route path="/login/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/shoppingCart" element={<Cart />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>  {/* TODO: Add :productId param for dynamic routing to different products */}
          <Route path="*" element={<Navbar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
