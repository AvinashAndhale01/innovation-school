import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Navbar from "./components/customNavbar/Navbar";
import Footer from "./components/customFooter/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Courses from "./pages/home/componets/Courses";
import CourseDescription from "./pages/courses/CourseDescription";
import Signin from "./pages/signin/Signin";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDescription />} />
        <Route path="/course" element={<Courses />} />
        <Route path="about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
