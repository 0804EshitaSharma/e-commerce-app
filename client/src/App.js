import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/:name" element={<Navbar />}></Route>
          <Route path="/login/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<Navbar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
