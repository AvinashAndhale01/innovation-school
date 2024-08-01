import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/App.scss";


import Navbar from "./components/customNavbar/Navbar";
import Footer from "./components/customFooter/Footer";
import Home from "./pages/home/Home";
import About from './pages/about/About'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
