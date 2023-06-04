import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
