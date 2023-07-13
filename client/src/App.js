import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebaseConfig";
import ProductPage from "./components/ProductPage/ProductPage";
import Dashboard from "./pages/dashboard";
import Home from "./pages/HomeProducts";
import Electronics from "./pages/Electronics";
import Books from "./pages/Books";
import Fashion from "./pages/Fashion";
import UserProfile from "./components/User/UserProfile";
import PrivateRoutes from "./utils/PrivateRoutes";
import WishlistPage from "./components/Wishlist/WishlistPage";
import PasswordReset from "./components/User/PasswordReset";
import ForgotPassword from "./components/User/ForgotPassword";
import { useSelector } from "react-redux";
import Admin from "./components/Admin/Admin";
import AddProduct from "./components/Admin/AddProduct";
import AdminRoutes from "./utils/AdminRoutes";

function App() {
  const [userName, setUsername] = useState("");
  const userFromStore = useSelector((state) => state.user.user);
  return (
    <div className="App">
      <Router>
        <Navbar name={userFromStore?.firstname} />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/shoppingCart" element={<Cart />}></Route>
            <Route path="/wishlist" element={<WishlistPage />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/electronics" element={<Electronics />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/fashion" element={<Fashion />}></Route>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/user" element={<UserProfile />}></Route>
          <Route path="/reset-password" element={<PasswordReset />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/product/:name" element={<ProductPage />}></Route>{" "}
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/addProduct" element={<AddProduct />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
