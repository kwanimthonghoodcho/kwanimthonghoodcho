import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Chunti from './pages/Chunti';
import Lots from './pages/Lots';
import Donations from './pages/Donations';
import './App.css';
import templeLogo from './assets/kwanimthonghoodcho.png'; // Adjust the path to the actual location of the image

function App() {
  return (
    <Router>
      <div className="header">
        {/* Logo with link */}
        <a href="/">
          <img src={templeLogo} className="logo" alt="Kwan Im Thong Hood Cho Logo" />
        </a>
        {/* Navigation */}
        <Navigation />
      </div>
      {/* Main Content */}
      
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/lots" element={<Lots />} />
        <Route path="/about" element={<About />} />
        <Route path="/chunti" element={<Chunti />} />
        <Route path="/donations" element={<Donations />} />

      </Routes>
      {/* Footer */}
      <footer className="copyright">
        &#169; 2025 Kwan Im Thong Hood Cho Temple. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
