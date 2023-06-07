import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Home from './pages/HomeProducts';
import Electronics from './pages/Electronics';
import Books from './pages/Books';
import Fashion from './pages/Fashion';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/' exact component={Home} /> */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Electronics' element={<Electronics />} />
        <Route path='/Books' element={<Books />} />
        <Route path='/Fashion' element={<Fashion />} />
      </Routes>
    </Router>
  );
}

export default App;
