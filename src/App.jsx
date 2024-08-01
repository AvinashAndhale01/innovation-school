import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/App.scss";
import About from "./pages/About";
import Home from "./pages/Home";
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
