import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebaseConfig";
import ProductPage from "./components/ProductPage/ProductPage";
import Dashboard from './pages/dashboard';
import Home from './pages/HomeProducts';
import Electronics from './pages/Electronics';
import Books from './pages/Books';
import Fashion from './pages/Fashion';

function App() {
  const [userName, setUsername] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
      } else {
        setUsername("Guest");
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/:name" element={<Navbar />}></Route>
          <Route path="/login/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/shoppingCart" element={<Cart />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>  {/* TODO: Add :productId param for dynamic routing to different products */}
          <Route path='/dashboard' element={<Dashboard />} ></Route>
          <Route path='/Home' element={<Home />} />
          <Route path='/Electronics' element={<Electronics />} ></Route>
          <Route path='/Books' element={<Books />} ></Route>
          <Route path='/Fashion' element={<Fashion />} ></Route>
        <Route path="*" element={<Navbar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
